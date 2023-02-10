'reach 0.1'

const outcome = Bytes(20)
const minimumBankBalance = (amt) => (amt + amt / 2) * 4

const [isOutcome, P_WINS, D_WINS, PUSH, RETRIEVE, BLACKJACK, END] = makeEnum(6)
const getOutcome = (
	dealerHand,
	dealerCount,
	cardValue,
	cardCount,
	boughtInsurance,
	surrendered
) => {
	if (dealerHand == 21) {
		if (boughtInsurance && dealerCount == 2) {
			return RETRIEVE
		} else if (surrendered && dealerCount == 2) {
			return END
		} else if (cardValue == dealerHand) {
			return PUSH
		} else {
			return D_WINS
		}
	} else if (dealerHand > 21) {
		if (cardValue < 22) {
			if (cardValue == 21 && cardCount == 2) {
				return BLACKJACK
			} else {
				return P_WINS
			}
		} else {
			return D_WINS
		}
	} else if (dealerHand < 21) {
		if (dealerHand > cardValue) {
			return D_WINS
		} else if (cardValue > dealerHand) {
			if (cardValue == 21 && cardCount == 2) {
				return BLACKJACK
			} else if (cardValue < 22) {
				return P_WINS
			} else {
				return D_WINS
			}
		} else if (cardValue == dealerHand) {
			return PUSH
		} else {
			return D_WINS
		}
	} else {
		return D_WINS
	}
}
/**
 *  dealerHand,
	dealerCount,
	cardValue,
	cardCount,
	boughtInsurance,
	surrendered
 */
assert(getOutcome(21, 2, 17, 3, false, false) == D_WINS)
assert(getOutcome(21, 3, 21, 4, false, false) == PUSH)
assert(getOutcome(12, 2, 13, 5, false, false) == P_WINS)
assert(getOutcome(21, 2, 14, 4, true, false) == RETRIEVE)
assert(getOutcome(20, 4, 21, 2, false, false) == BLACKJACK)
assert(getOutcome(21, 2, 9, 2, false, true) == END)
assert(getOutcome(20, 4, 20, 5, false, false) == PUSH)
forall(UInt, (w) =>
	forall(UInt, (x) =>
		forall(UInt, (y) =>
			forall(UInt, (z) =>
				forall(Bool, (a) =>
					forall(Bool, (b) => assert(isOutcome(getOutcome(w, x, y, z, a, b))))
				)
			)
		)
	)
)

export const main = Reach.App(() => {
	const D = Participant('D', {
		bankAmount: UInt,
		betAmount: UInt,
		deployed: Fun([UInt], Null),
	})

	const Player = API('Player', {
		getOutcome: Fun([UInt, UInt, Bool, Bool, Bool], outcome),
	})

	const Dealer = API('Dealer', {
		submitHand: Fun([UInt, UInt], Null),
	})

	const Bank = View({
		bank: UInt,
	})
	init()

	D.only(() => {
		const bankAmount = declassify(interact.bankAmount)
		const betAmount = declassify(interact.betAmount)
	})
	D.publish(bankAmount, betAmount)
	commit()
	D.pay(bankAmount)
	D.interact.deployed(betAmount)

	const [bank, keepGoing, dealerHand, dealerCount, hasDealt] = parallelReduce([
		bankAmount,
		true,
		0,
		0,
		false,
	])
		.invariant(balance() == bank)
		.define(() => {
			Bank.bank.set(bank)
		})
		.while(keepGoing)
		.api_(
			Player.getOutcome,
			(cardValue, cardCount, boughtInsurance, surrendered, doubledDown) => {
				check(hasDealt, 'The Dealer is yet to submit his hand')
				check(cardCount > 0 && cardValue > 0, 'Invalid submission')
				check(
					(boughtInsurance && !surrendered) ||
						(!boughtInsurance && surrendered) ||
						(!boughtInsurance && !surrendered),
					'You cannot surrender and still have insurance'
				)
				check(
					bank >= betAmount + betAmount / 2,
					'The Bank cannot accommodate your bet'
				)
				const bet = boughtInsurance
					? betAmount * (doubledDown ? 4 : 2)
					: surrendered
					? betAmount / 2
					: doubledDown
					? betAmount * 2
					: betAmount
				return [
					bet,
					(ret) => {
						const result = getOutcome(
							dealerHand,
							dealerCount,
							cardValue,
							cardCount,
							boughtInsurance,
							surrendered
						)
						if (result == P_WINS) {
							const prize = bet * 2
							if (balance() >= prize) transfer(prize).to(this)
							ret(outcome.pad('Player Wins'))
							return [
								bank - bet,
								// This is because a player may buy insurance and double down
								bank >= minimumBankBalance(betAmount),
								dealerHand,
								dealerCount,
								hasDealt,
							]
						} else if (result == D_WINS) {
							ret(outcome.pad('Dealer Wins'))
							return [
								bank + bet,
								bank >= minimumBankBalance(betAmount),
								dealerHand,
								dealerCount,
								hasDealt,
							]
						} else if (result == PUSH) {
							if (balance() >= bet) transfer(bet).to(this)
							ret(outcome.pad('Push'))
							return [
								bank,
								bank >= minimumBankBalance(betAmount),
								dealerHand,
								dealerCount,
								hasDealt,
							]
						} else if (result == RETRIEVE) {
							if (boughtInsurance && balance() >= bet) transfer(bet).to(this)
							ret(outcome.pad('Retrieve'))
							return [
								bank,
								bank >= minimumBankBalance(betAmount),
								dealerHand,
								dealerCount,
								hasDealt,
							]
						} else if (result == BLACKJACK) {
							if (balance() >= bet + bet + bet / 2)
								transfer(bet + bet + bet / 2).to(this)
							ret(outcome.pad('Blackjack'))
							return [
								bank - (bet + bet / 2),
								bank >= minimumBankBalance(betAmount),
								dealerHand,
								dealerCount,
								hasDealt,
							]
						} else {
							ret(outcome.pad('End'))
							return [
								bank + bet,
								bank >= minimumBankBalance(betAmount),
								dealerHand,
								dealerCount,
								hasDealt,
							]
						}
					},
				]
			}
		)
		.api_(Dealer.submitHand, (cardValue, cardCount) => {
			check(cardCount > 0 && cardValue > 0, 'Invalid submission')
			return [
				0,
				(ret) => {
					ret(null)
					return [bank, keepGoing, cardValue, cardCount, true]
				},
			]
		})
	transfer(balance()).to(D)
	commit()
	exit()
})
