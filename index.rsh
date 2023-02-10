'reach 0.1'

const outcome = Bytes(20)

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
			} else {
				return P_WINS
			}
		} else {
			return D_WINS
		}
	} else {
		return D_WINS
	}
}

export const main = Reach.App(() => {
	const D = Participant('D', {
		bankAmount: UInt,
		deployed: Fun([], Null),
	})

	const Player = API('Player', {
		getOutcome: Fun([UInt, UInt, UInt, Bool, Bool], outcome),
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
	})
	D.publish(bankAmount)
	commit()
	D.pay(bankAmount)
	D.interact.deployed()

	const [bets, keepGoing, dealerHand, dealerCount] = parallelReduce([
		bankAmount,
		true,
		0,
		0,
	])
		.invariant(balance() == bets)
		.define(() => {
			Bank.bank.set(bets)
		})
		.while(keepGoing)
		.api_(
			Player.getOutcome,
			(cardValue, cardCount, bet_, boughtInsurance, surrendered) => {
				const bet = boughtInsurance ? bet_ * 2 : surrendered ? bet_ / 2 : bet_
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
							return [balance(), keepGoing, dealerHand, dealerCount]
						} else if (result == D_WINS) {
							ret(outcome.pad('Dealer Wins'))
							return [balance(), keepGoing, dealerHand, dealerCount]
						} else if (result == PUSH) {
							if (balance() >= bet) transfer(bet).to(this)
							ret(outcome.pad('Push'))
							return [balance(), keepGoing, dealerHand, dealerCount]
						} else if (result == RETRIEVE) {
							if (boughtInsurance && balance() >= bet) transfer(bet).to(this)
							ret(outcome.pad('Retrieve'))
							return [balance(), keepGoing, dealerHand, dealerCount]
						} else if (result == BLACKJACK) {
							if (balance() >= bet + bet + bet / 2)
								transfer(bet + bet + bet / 2).to(this)
							ret(outcome.pad('Blackjack'))
							return [balance(), keepGoing, dealerHand, dealerCount]
						} else {
							ret(outcome.pad('End'))
							return [balance(), keepGoing, dealerHand, dealerCount]
						}
					},
				]
			}
		)
		.api_(Dealer.submitHand, (cardValue, cardCount) => {
			return [
				0,
				(ret) => {
					ret(null)
					return [bets, keepGoing, cardValue, cardCount]
				},
			]
		})
	transfer(balance()).to(D)
	commit()
	exit()
})
