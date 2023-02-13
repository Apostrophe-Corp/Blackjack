'reach 0.1'

const outcome = Bytes(20)
const defaultHand = {
	cardValue: 0,
	cardCount: 0,
	boughtInsurance: false,
	surrendered: false,
	doubledDown: false,
}
const fromPlayersBet = (x) =>
	fromMaybe(
		x,
		() => 0,
		(y) => y
	)
const fromPlayersHand = (x) =>
	fromMaybe(
		x,
		() => defaultHand,
		(y) => y
	)
const minimumBankBalance = (amt) => (amt / 100) * 250

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
	} else if (surrendered) {
		return D_WINS
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
 *	dealerCount,
 *	cardValue,
 *	cardCount,
 *	boughtInsurance,
 *	surrendered
 */
assert(getOutcome(20, 4, 21, 2, false, false) == BLACKJACK)
assert(getOutcome(12, 3, 21, 2, false, false) == BLACKJACK)
assert(getOutcome(12, 2, 13, 5, false, false) == P_WINS)
assert(getOutcome(23, 2, 19, 4, true, false) == P_WINS)
assert(getOutcome(21, 2, 17, 3, false, false) == D_WINS)
assert(getOutcome(27, 4, 22, 3, false, false) == D_WINS)
assert(getOutcome(21, 2, 14, 4, true, false) == RETRIEVE)
assert(getOutcome(21, 2, 20, 5, true, false) == RETRIEVE)
assert(getOutcome(21, 3, 21, 4, false, false) == PUSH)
assert(getOutcome(15, 3, 15, 4, true, false) == PUSH)
assert(getOutcome(21, 2, 19, 2, false, true) == END)
assert(getOutcome(21, 2, 9, 2, false, true) == END)
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
		placeBet: Fun([Bool], UInt),
		doubleDown: Fun([Bool], UInt),
		buyInsurance: Fun([Bool], UInt),
		surrender: Fun([Bool, UInt, UInt], outcome),
		submitHand: Fun([Bool, UInt, UInt], UInt),
		getOutcome: Fun([Bool], outcome),
		reclaim: Fun([Bool], UInt),
	})

	const Dealer = API('Dealer', {
		submitHand: Fun([UInt, UInt], Null),
		newRound: Fun([], Null),
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

	const playersSet = new Set()
	const players1stBet = new Map(Address, UInt)
	const players2ndBet = new Map(Address, UInt)

	const players1stHand = new Map(
		Address,
		Object({
			cardValue: UInt,
			cardCount: UInt,
			boughtInsurance: Bool,
			surrendered: Bool,
			doubledDown: Bool,
		})
	)

	const players2ndHand = new Map(
		Address,
		Object({
			cardValue: UInt,
			cardCount: UInt,
			boughtInsurance: Bool,
			surrendered: Bool,
			doubledDown: Bool,
		})
	)

	const [
		bank,
		keepGoing,
		dealerHand,
		dealerCount,
		hasDealt,
		playerSurrendered,
		pendingPayouts,
	] = parallelReduce([bankAmount, true, 0, 0, false, false, 0])
		.invariant(bank == balance())
		.define(() => {
			Bank.bank.set(bank)
			const cleanupCheck = (isFirstHand, address) => {
				if (isFirstHand) {
					delete players1stBet[address]
					delete players1stHand[address]
				} else {
					delete players2ndBet[address]
					delete players2ndHand[address]
				}
				if (
					isNone(players1stBet[address]) &&
					isNone(players1stHand[address]) &&
					isNone(players2ndBet[address]) &&
					isNone(players2ndHand[address])
				)
					playersSet.remove(address)
			}
		})
		.while(keepGoing)
		.api_(Player.placeBet, (isFirstHand) => {
			const playerBet = fromPlayersBet(
				isFirstHand ? players1stBet[this] : players2ndBet[this]
			)
			check(playerBet == 0, "You've placed a bet already")
			check(this != D, 'You are not authorized to make this call')
			return [
				betAmount,
				(ret) => {
					playersSet.insert(this)
					require(playersSet.member(this))
					if (isFirstHand) {
						players1stBet[this] = betAmount
					} else {
						players2ndBet[this] = betAmount
					}
					players1stHand[this] = defaultHand
					players2ndHand[this] = defaultHand
					ret(betAmount)
					return [
						bank + betAmount,
						keepGoing,
						dealerHand,
						dealerCount,
						hasDealt,
						playerSurrendered,
						pendingPayouts + 1,
					]
				},
			]
		})
		.api_(Player.doubleDown, (isFirstHand) => {
			const playerBet = fromPlayersBet(
				isFirstHand ? players1stBet[this] : players2ndBet[this]
			)
			const playerHand = fromPlayersHand(
				isFirstHand ? players1stHand[this] : players2ndHand[this]
			)
			check(playersSet.member(this), 'You did not place a bet on this game')
			check(!playerHand.doubledDown, 'You cannot double down twice')
			check(this != D, 'You are not authorized to make this call')
			return [
				betAmount,
				(ret) => {
					if (isFirstHand) {
						players1stBet[this] = betAmount + playerBet
						players1stHand[this] = {
							...playerHand,
							doubledDown: true,
						}
					} else {
						players2ndBet[this] = betAmount + playerBet
						players2ndHand[this] = {
							...playerHand,
							doubledDown: true,
						}
					}
					ret(betAmount + playerBet)
					return [
						bank + betAmount,
						keepGoing,
						dealerHand,
						dealerCount,
						hasDealt,
						playerSurrendered,
						pendingPayouts,
					]
				},
			]
		})
		.api_(Player.buyInsurance, (isFirstHand) => {
			const playerBet = fromPlayersBet(
				isFirstHand ? players1stBet[this] : players2ndBet[this]
			)
			const playerHand = fromPlayersHand(
				isFirstHand ? players1stHand[this] : players2ndHand[this]
			)
			check(playersSet.member(this), 'You did not place a bet on this game')
			check(!playerHand.boughtInsurance, 'You cannot buy insurance twice')
			check(this != D, 'You are not authorized to make this call')
			return [
				betAmount,
				(ret) => {
					if (isFirstHand) {
						players1stBet[this] = betAmount + playerBet
						players1stHand[this] = {
							...playerHand,
							boughtInsurance: true,
						}
					} else {
						players2ndBet[this] = betAmount + playerBet
						players2ndHand[this] = {
							...playerHand,
							boughtInsurance: true,
						}
					}
					ret(betAmount + playerBet)
					return [
						bank + betAmount,
						keepGoing,
						dealerHand,
						dealerCount,
						hasDealt,
						playerSurrendered,
						pendingPayouts,
					]
				},
			]
		})
		.api_(Player.surrender, (isFirstHand, cardValue, cardCount) => {
			const playerBet = fromPlayersBet(
				isFirstHand ? players1stBet[this] : players2ndBet[this]
			)
			check(playersSet.member(this), 'You did not place a bet on this game')
			check(
				playerBet == betAmount,
				'You are not allowed to surrender at this point'
			)
			check(this != D, 'You are not authorized to make this call')
			return [
				0,
				(ret) => {
					const halfBet = playerBet / 2
					const result = getOutcome(
						dealerHand,
						dealerCount,
						cardValue,
						cardCount,
						false,
						true
					)
					if (bank >= halfBet) transfer(halfBet).to(this)
					ret(
						result == D_WINS ? outcome.pad('Dealer Wins') : outcome.pad('End')
					)
					cleanupCheck(isFirstHand, this)
					const newBankBal = bank - halfBet
					return [
						newBankBal,
						newBankBal >= minimumBankBalance(betAmount),
						dealerHand,
						dealerCount,
						hasDealt,
						result == END,
						pendingPayouts - 1,
					]
				},
			]
		})
		.api_(Player.submitHand, (isFirstHand, cardValue, cardCount) => {
			const playerBet = fromPlayersBet(
				isFirstHand ? players1stBet[this] : players2ndBet[this]
			)
			const playerHand = fromPlayersHand(
				isFirstHand ? players1stHand[this] : players2ndHand[this]
			)
			check(playersSet.member(this), 'You did not place a bet on this game')
			check(this != D, 'You are not authorized to make this call')
			check(cardCount > 0 && cardValue > 0, 'Invalid submission')
			return [
				0,
				(ret) => {
					if (isFirstHand) {
						players1stHand[this] = {
							...playerHand,
							cardValue,
							cardCount,
						}
					} else {
						players2ndHand[this] = {
							...playerHand,
							cardValue,
							cardCount,
						}
					}
					ret(playerBet)
					return [
						bank,
						keepGoing,
						dealerHand,
						dealerCount,
						hasDealt,
						playerSurrendered,
						pendingPayouts,
					]
				},
			]
		})
		.api_(Player.getOutcome, (isFirstHand) => {
			const playerBet = fromPlayersBet(
				isFirstHand ? players1stBet[this] : players2ndBet[this]
			)
			const playerHand = fromPlayersHand(
				isFirstHand ? players1stHand[this] : players2ndHand[this]
			)
			check(playersSet.member(this), 'You did not place a bet on this game')
			check(hasDealt, 'The Dealer is yet to submit his hand')
			check(this != D, 'You are not authorized to make this call')
			return [
				0,
				(ret) => {
					const result = getOutcome(
						dealerHand,
						dealerCount,
						playerHand.cardValue,
						playerHand.cardCount,
						playerHand.boughtInsurance,
						playerHand.surrendered
					)
					if (result == P_WINS) {
						// If a player bought insurance, we do not return the insurance,
						// because he won the game
						const prize =
							playerBet - (playerHand.boughtInsurance ? betAmount : 0)
						if (bank >= prize * 2) transfer(prize * 2).to(this)
						ret(outcome.pad('Player Wins'))
						const newBankBal = bank - prize * 2
						cleanupCheck(isFirstHand, this)
						return [
							newBankBal,
							// This is because the highest possible prize
							// the contract can pay out is a Blackjack win
							// (250% of the bet amount)
							newBankBal >= minimumBankBalance(betAmount),
							dealerHand,
							dealerCount,
							hasDealt,
							playerSurrendered,
							pendingPayouts - 1,
						]
					} else if (result == D_WINS) {
						ret(outcome.pad('Dealer Wins'))
						cleanupCheck(isFirstHand, this)
						return [
							bank,
							bank >= minimumBankBalance(betAmount),
							dealerHand,
							dealerCount,
							hasDealt,
							playerSurrendered,
							pendingPayouts - 1,
						]
					} else if (result == PUSH) {
						// If a player bought insurance, we do not return the insurance,
						// because he did not lose
						const prize =
							playerBet - (playerHand.boughtInsurance ? betAmount : 0)
						if (bank >= prize) transfer(prize).to(this)
						ret(outcome.pad('Push'))
						const newBankBal = bank - prize
						cleanupCheck(isFirstHand, this)
						return [
							newBankBal,
							newBankBal >= minimumBankBalance(betAmount),
							dealerHand,
							dealerCount,
							hasDealt,
							playerSurrendered,
							pendingPayouts - 1,
						]
					} else if (result == BLACKJACK) {
						const blackjack = (playerBet / 100) * 250
						if (bank >= blackjack) transfer(blackjack).to(this)
						ret(outcome.pad('Blackjack'))
						const newBankBal = bank - blackjack
						cleanupCheck(isFirstHand, this)
						return [
							newBankBal,
							newBankBal >= minimumBankBalance(betAmount),
							dealerHand,
							dealerCount,
							hasDealt,
							playerSurrendered,
							pendingPayouts - 1,
						]
					} else {
						// result == RETRIEVE, as it can never be end at this point,
						// for no player who had surrendered can make this call
						if (bank >= playerBet) transfer(playerBet).to(this)
						ret(outcome.pad('Retrieve'))
						const newBankBal = bank - playerBet
						cleanupCheck(isFirstHand, this)
						return [
							newBankBal,
							newBankBal >= minimumBankBalance(betAmount),
							dealerHand,
							dealerCount,
							hasDealt,
							playerSurrendered,
							pendingPayouts - 1,
						]
					}
				},
			]
		})
		.api_(Player.reclaim, (isFirstHand) => {
			const playerBet = fromPlayersBet(
				isFirstHand ? players1stBet[this] : players2ndBet[this]
			)
			check(playerSurrendered, 'No one has surrendered yet')
			check(playersSet.member(this), 'You do not have a bet in this game')
			check(this != D, 'You are not authorized to make this call')
			return [
				0,
				(ret) => {
					if (bank >= playerBet) transfer(playerBet).to(this)
					ret(playerBet)
					cleanupCheck(isFirstHand, this)
					const newBankBal = bank - playerBet
					return [
						newBankBal,
						newBankBal >= minimumBankBalance(betAmount),
						dealerHand,
						dealerCount,
						hasDealt,
						playerSurrendered,
						pendingPayouts - 1,
					]
				},
			]
		})
		.api_(Dealer.submitHand, (cardValue, cardCount) => {
			check(cardCount > 0 && cardValue > 0, 'Invalid submission')
			check(this == D, 'You are not authorized to make this call')
			return [
				0,
				(ret) => {
					ret(null)
					return [
						bank,
						keepGoing,
						cardValue,
						cardCount,
						true,
						playerSurrendered,
						pendingPayouts,
					]
				},
			]
		})
		.api_(Dealer.newRound, () => {
			check(
				pendingPayouts == 0,
				'There are still pending payouts to be made for this round'
			)
			check(hasDealt, 'You must make a submission for the current round first')
			check(this == D, 'You are not authorized to make this call')
			return [
				0,
				(ret) => {
					ret(null)
					return [bank, keepGoing, 0, 0, false, false, pendingPayouts]
				},
			]
		})
	transfer(bank).to(D)
	commit()
	exit()
})
