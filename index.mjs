import { loadStdlib } from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs'
const reach = loadStdlib()

/**
 * Converts a Byte input to String, stripping it of any null character
 * @param {Byte} byte A Byte value
 * @returns A String value without null characters
 */
const noneNull = (byte) => {
	let string = '',
		i = 0
	const len = byte.length
	for (i; i < len; i++) {
		if (String(byte[i]) !== String('\u0000')) {
			string += byte[i]
		}
	}
	return string
}

const hearts = {
	A: '+',
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	10: 10,
	J: 10,
	K: 10,
	Q: 10,
}

const diamonds = {
	A: '+',
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	10: 10,
	J: 10,
	K: 10,
	Q: 10,
}

const spades = {
	A: '+',
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	10: 10,
	J: 10,
	K: 10,
	Q: 10,
}

const clovers = {
	A: '+',
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	10: 10,
	J: 10,
	K: 10,
	Q: 10,
}

const choices = ['Hit', 'Stand']
/**
 * Hit:
 * Take a card from the deck,
 * with the hopes of making the sum of card values closer to 21
 */

/**
 * Stand:
 * End a turn, and keep the cards dealt
 */

/**
 * Double Down:
 * A player doubles his bet, then is dealt an additional card, and is made to stand
 */

const outcomes = ['Player Wins', 'Dealer Wins', 'Push', 'Blackjack', 'Retrieve']
/**
 * Player Wins:
 * A player's cards is equal or closer to 21 than the dealer's,
 * then the player gets back his bet amount and additional equal amount
 */

/**
 * Dealer Wins:
 * The dealer's cards is equal or closer to 21 then the player's,
 * the the player loses his bet
 */

/**
 * Push:
 * The dealer's cards is equal to a player's cards,
 * then there are no exchange of bets
 */

/**
 * Blackjack:
 * A player is dealt a natural with the Dealer not having one upon reveal,
 * then the player gets back his bet amount,
 * and an amount equal to one and half his bet amount
 */

/**
 * Retrieve:
 * A player pays insurance and the Dealer does have a natural,
 * so his bet plus insurance is returned
 */

const events = ['Bust', 'Split']
/**
 * Bust:
 * A player's or dealer's cards value exceeded 21
 */

/**
 * Split:
 * When a player is dealt a pair of cards,
 * the cards are split, each with it's own bet,
 * then the player is dealt 2 more additional cards,
 * 1 for each hand
 */

/**
 * Takes in four stacks of 13 unique cards each and shuffles then into a deck of 52 cards
 * @param {Object} hearts An Object representing a stack of Hearts
 * @param {Object} diamonds An Object representing a stack of Diamonds
 * @param {Object} spades An Object representing a stack of Spades
 * @param {Object} clovers An Object representing a stack of Clovers
 * @returns An array representing a shuffled deck of 52 cards if the length of each stack were exactly 13, else returns an empty array
 */
const shuffleDeck = (hearts, diamonds, spades, clovers) => {
	const heartKeys = Object.keys(hearts)
	const diamondKeys = Object.keys(diamonds)
	const spadeKeys = Object.keys(spades)
	const cloverKeys = Object.keys(clovers)

	if (
		heartKeys.length != 13 ||
		diamondKeys.length != 13 ||
		spadeKeys.length != 13 ||
		cloverKeys.length != 13
	)
		return []

	const newDeck = []
	let deckLength =
		heartKeys.length + diamondKeys.length + spadeKeys.length + cloverKeys.length
	const deck = [heartKeys, diamondKeys, spadeKeys, cloverKeys]
	const deckMap = ['hearts', 'diamonds', 'spades', 'clovers']
	for (deckLength; deckLength > 0; deckLength--) {
		let cardType = Math.floor(Math.random() * deck.length)
		const faceIndex = Math.floor(Math.random() * deck[cardType].length)
		newDeck.push([deck[cardType][faceIndex], deckMap[cardType]])
		deck[cardType].splice(faceIndex, 1)
		if (!deck[cardType].length) {
			deck.splice(cardType, 1)
			deckMap.splice(cardType, 1)
		}
	}
	return newDeck
}

const initialDeck = shuffleDeck(hearts, diamonds, spades, clovers)

/**
 * Formats BigNumber microalgos to Algos in String
 * @param {BigNumber} x A BigNumber value of microalgos
 * @returns A formatted Algo value in String
 */
const fmt = (x) => reach.formatCurrency(x, 4)

/**
 * Retrieves the balance of an account
 * @param {Object} who An account
 * @returns A formatted Algo value in String
 */
const balOf = async (who) => fmt(await reach.balanceOf(who))

/**
 * Calculates the value of a Player's cards at hand
 * @param {Array[Array[Number | String]]} cards An array of arrays representing a player's cards
 * @returns The value of a Player's cards at hand
 */
const cardValue = (cards) => {
	if (!cards.length) return cards.length
	const faces = {
		2: 2,
		3: 3,
		4: 4,
		5: 5,
		6: 6,
		7: 7,
		8: 8,
		9: 9,
		10: 10,
		J: 10,
		K: 10,
		Q: 10,
	}
	let value = 0
	const As = {
		count: 0,
	}
	const cardLength = cards.length
	let i = 0
	for (i; i < cardLength; i++) {
		const card = cards[i]
		if (card[0] == 'A') {
			As.count++
			continue
		} else {
			value += faces[card[0]]
		}
	}
	const aCount = As.count
	let i_ = 0
	value += As.count
	if (value == 21) return value
	for (i_; i_ < aCount; i_++) {
		if (value + 10 == 21) return value + 10
		else if (value + 10 < 21) value += 10
		else break
	}
	return value
}

// Game Flow---------------------------------------------
const startingBalance = reach.parseCurrency(1000)
const accDealer = await reach.newTestAccount(reach.parseCurrency(10000))
const ctc = accDealer.contract(backend)
let playerSurrendered = false
console.log("[+] Welcome to Apostrophe's Blackjack Game")
const dealer = {
	account: accDealer,
	ctc,
	balance: async () => await balOf(accDealer),
	cards: [],
}
console.log('[+] The Dealer is ready')

/**
 * Generates any amount of Players for the game
 * @param {Number} amount The amount of players to be generated
 * @returns An array of player objects
 */
const generatePlayers = async (amount) => {
	const players = []
	let i = 0
	for (i; i < amount; i++) {
		const acc = await reach.newTestAccount(startingBalance)
		const ctc = acc.contract(backend, dealer.ctc.getInfo())
		players.push({
			account: acc,
			ctc,
			balance: async () => await balOf(acc),
			cards: [],
			cards_: [],
			boughtInsurance: false,
			boughtInsurance_: false,
			surrendered: false,
			surrendered_: false,
			doubledDown: false,
			doubledDown_: false,
		})
	}
	return players
}

/**
 * Simulates play for a Player at the Table
 * @param {Object} player A player object representing a player on the table
 * @param {String} who The player identifier
 * @returns True if the player surrendered, but if not, false
 */
const play = async (player, who) => {
	let result = false
	if (cardValue(player.cards) == 21) {
		console.log(`[+] ${who} was dealt a natural`)
		// Possible blackjack win
		return result
	}
	if (
		(player.cards[0][0] == '8' || player.cards[0][0] == 'A') &&
		player.cards[0][0] == player.cards[1][0]
	) {
		// A split must occur
		player.cards_.push(player.cards.pop())
		console.log(`[+] ${who} just made a split`)
		dealCard(player.cards, 1)
		console.log(`[-] ${who} was dealt:`, player.cards[player.cards.length - 1])
		dealCard(player.cards_, 1)
		console.log(
			`[-] ${who}'s second hand was dealt:`,
			player.cards_[player.cards_.length - 1]
		)
	}
	const dealerFirstCard = dealer.cards[0][0]
	const tenCardsNA = {
		J: 'J',
		Q: 'Q',
		K: 'K',
		A: 'A',
		10: '10',
	}
	if (cardValue(player.cards) != 21) {
		if (dealerFirstCard in tenCardsNA) {
			const move = Math.floor(Math.random() * 3)
			if (move == 0 && !playerSurrendered) {
				player.boughtInsurance = true
				console.log(`[+] ${who} bought insurance`)
			} else if (move == 1 && !playerSurrendered) {
				player.surrendered = true
				result = true
				playerSurrendered = true
				console.log(`[+] ${who} surrendered`)
			}
		}
		if (!player.surrendered) {
			let value = cardValue(player.cards)
			while (value < 21) {
				const choice = choices[Math.floor(Math.random() * choices.length)]
				if (
					cardValue(player.cards) == 9 ||
					cardValue(player.cards) == 10 ||
					cardValue(player.cards) == 11
				) {
					const doubleDown = Math.floor(Math.random() * 2)
					if (doubleDown) {
						player.doubledDown = true
						dealCard(player.cards, 1)
						console.log(`[+] ${who} doubled down`)
						console.log(
							`[-] ${who} was dealt:`,
							player.cards[player.cards.length - 1]
						)
						value = cardValue(player.cards)
						break
					}
				}
				if (
					choice == 'Hit' ||
					(dealerFirstCard in tenCardsNA && cardValue(player.cards) <= 10)
				) {
					if (cardValue(player.cards) == 20) {
						console.log(`[+] ${who} stood`)
						break
					}
					dealCard(player.cards, 1)
					console.log(`[+] ${who} called for a hit`)
					console.log(
						`[-] ${who} was dealt:`,
						player.cards[player.cards.length - 1]
					)
					value = cardValue(player.cards)
				} else if (choice == 'Stand') {
					console.log(`[+] ${who} stood`)
					value = cardValue(player.cards)
					break
				}
			}
			console.log(
				`[+] ${who}'s card value is ${value}${
					value > 21 ? `, It's a Bust!` : ''
				}`
			)
		}
	} else {
		console.log(`[+] ${who} was dealt a natural`)
	}
	if (player.cards_.length) {
		if (cardValue(player.cards_) != 21) {
			if (dealerFirstCard in tenCardsNA) {
				const move = Math.floor(Math.random() * 3)
				if (move == 0) {
					player.boughtInsurance_ = true
					console.log(`[+] ${who} bought insurance for his second hand`)
				} else if (move == 1 && !playerSurrendered) {
					player.surrendered_ = true
					result = true
					playerSurrendered = true
					console.log(`[+] ${who} surrendered his second hand`)
				}
			}
			if (!player.surrendered_) {
				let value = cardValue(player.cards_)
				while (value < 21) {
					const choice = choices[Math.floor(Math.random() * choices.length)]
					if (
						cardValue(player.cards_) == 9 ||
						cardValue(player.cards_) == 10 ||
						cardValue(player.cards_) == 11
					) {
						const doubleDown = Math.floor(Math.random() * 2)
						if (doubleDown) {
							player.doubledDown_ = true
							dealCard(player.cards_, 1)
							console.log(`[+] ${who} doubled down on his second hand`)
							console.log(
								`[-] ${who}'s second hand was dealt:`,
								player.cards_[player.cards_.length - 1]
							)
							value = cardValue(player.cards_)
							break
						}
					}
					if (
						choice == 'Hit' ||
						(dealerFirstCard in tenCardsNA && cardValue(player.cards_) <= 10)
					) {
						if (cardValue(player.cards_) == 20) break
						dealCard(player.cards_, 1)
						console.log(`[+] ${who} called for a hit on his second hand`)
						console.log(
							`[-] ${who} was dealt:`,
							player.cards_[player.cards_.length - 1]
						)
						value = cardValue(player.cards_)
					} else if (choice == 'Stand') {
						console.log(`[+] ${who} stood his second hand`)
						value = cardValue(player.cards_)
						break
					}
				}
				console.log(
					`[+] ${who}'s second hand card value is ${value}${
						value > 21 ? `, It's a Bust!` : ''
					}`
				)
			}
		} else {
			console.log(`[+] ${who} was dealt a natural on his second hand`)
		}
	}
	return result
}

/**
 * Simulates play for the Dealer
 * @param {Object} dealer A dealer object representing the Dealer
 * @param {Boolean} onSurrender A boolean indicating if the Dealer was called to check his cards due a player surrendering
 * @returns True if the Dealer had a natural, but if not, false
 */
const playDealer = async (dealer, onSurrender = false) => {
	if (cardValue(dealer.cards) == 21) {
		// Possible blackjack win
		console.log(
			`[+] Dealer has a natural, as his second card is:`,
			dealer.cards[1]
		)
		console.log(
			`[+] Dealer's card value is`,
			String(cardValue(dealer.cards)),
			`${Number(cardValue(dealer.cards)) > 21 ? `, It's a Bust!` : ''}`
		)
		try {
			await dealer.ctc.apis.Dealer.submitHand(
				cardValue(dealer.cards),
				dealer.cards.length
			)
		} catch (error) {
			console.log({ error })
		}
		return true
	} else {
		if (onSurrender) {
			console.log(`[+] Dealer does not have a natural`)
			try {
				await dealer.ctc.apis.Dealer.submitHand(
					cardValue(dealer.cards),
					dealer.cards.length
				)
			} catch (error) {
				console.log({ error })
			}
			return false
		} else {
			console.log(`[+] Dealer now reveals his second card:`, dealer.cards[1])
		}
		let value = cardValue(dealer.cards)
		let keepPlaying = true
		while (keepPlaying && value < 21) {
			const choice = Math.floor(Math.random() * 2)
			if (choice) {
				dealCard(dealer.cards, 1)
				console.log(`[+] Dealer called for a hit`)
				console.log(
					`[-] Dealer was dealt:`,
					dealer.cards[dealer.cards.length - 1]
				)
			} else {
				console.log(`[+] Dealer has stood`)
				break
			}
			value = cardValue(dealer.cards)
		}
		console.log(
			`[+] Dealer's card value is`,
			String(cardValue(dealer.cards)),
			`${value > 21 ? `, It's a Bust!` : ''}`
		)
		try {
			await dealer.ctc.apis.Dealer.submitHand(
				cardValue(dealer.cards),
				dealer.cards.length
			)
		} catch (error) {
			console.log({ error })
		}
		return false
	}
}

/**
 * Gets the outcome of a player's submission
 * @param {Object} player A player object representing a player on the table
 * @param {String} who The player identifier
 * @returns A string array representing the outcome of a player's submission
 */
const getOutcome = async (player, who) => {
	const outcome = []
	if (!player.cards_.length) {
		try {
			console.log(`[-] ${who}'s hand is:`, player.cards)
			const byteResponse = await player.ctc.apis.Player.getOutcome(
				cardValue(player.cards),
				player.cards.length,
				player.boughtInsurance,
				player.surrendered,
				player.doubledDown
			)
			console.log(`[-] ${who} pays his wager, and awaits his outcome`)
			const response = noneNull(byteResponse)
			outcome.push(response)
		} catch (error) {
			console.log({ error })
		}
	} else {
		try {
			console.log(`[-] ${who}'s hand is:`, player.cards)
			const byteResponse = await player.ctc.apis.Player.getOutcome(
				cardValue(player.cards),
				player.cards.length,
				player.boughtInsurance,
				player.surrendered,
				player.doubledDown
			)
			console.log(`[-] ${who} pays his wager, and awaits his outcome`)
			const response = noneNull(byteResponse)
			outcome.push(response)
			console.log(`${who}'s second hand is:`, player.cards_)
			const byteResponse_ = await player.ctc.apis.Player.getOutcome(
				cardValue(player.cards_),
				player.cards_.length,
				player.boughtInsurance_,
				player.surrendered_,
				player.doubledDown_
			)
			console.log(
				`[-] ${who} pays his second wager, and awaits his second outcome`
			)
			const response_ = noneNull(byteResponse_)
			outcome.push(response_)
		} catch (error) {
			console.log({ error })
		}
	}
	return outcome
}

/**
 * Deals cards to those at the table
 * @param {Array[Array[Number | String]]} cards An array of arrays representing a player's cards
 * @param {Number} amount The amount of cards to be dealt at a time
 */
const dealCard = (cards = {}, amount = 1) => {
	let i = 0
	for (i; i < amount; i++) {
		cards.push(initialDeck.shift())
	}
}

/**
 * Simulates the Game
 * @param {Number} playerCount The number of players to be simulated for the game
 * @param {Number} cardCount The amount of cards to be dealt to each player at the start of the game
 * @returns undefined
 */
const simulatePlay = async (playerCount = 4, cardCount = 2) => {
	let i = 0,
		o = 0
	const players = await generatePlayers(playerCount)
	console.log('[+] Players are seated')
	console.log('[+] Dealing their cards')

	for (o; o < cardCount; o++) {
		for (i; i < playerCount; i++) {
			const player = players[i]
			dealCard(player.cards, 1)
			console.log(
				`[-] Player_${i + 1} was dealt:`,
				player.cards[player.cards.length - 1]
			)
		}
		i = 0
		console.log('[+] Dealing the Dealer')
		dealCard(dealer.cards, 1)
	}
	console.log('[+] Dealing complete')
	console.log('[+] These are the initial cards')
	for (i; i < playerCount; i++) {
		const player = players[i]
		console.log(`[-] Player_${i + 1} has:`, player.cards)
	}
	console.log(
		`[+] The Dealer's visible card${cardCount > 2 ? 's' : ''} is:`,
		dealer.cards[0]
	)
	i = 0
	console.log('[+] Players can now have their turns')
	for (i; i < playerCount; i++) {
		const player = players[i]
		const playerSurrendered = await play(player, `Player_${i + 1}`)
		if (playerSurrendered) {
			await playDealer(dealer, true)
			console.log(
				`[-] Player_${i + 1}'s balance before submitting:`,
				await player.balance(),
				reach.standardUnit
			)
			const outcome = await getOutcome(player, `Player_${i + 1}`)
			console.log(
				`[-] Player_${i + 1}'s balance after submitting:`,
				await player.balance(),
				reach.standardUnit
			)
			if (
				outcome[0] == 'End' ||
				(player.cards_.length && outcome[1] == 'End')
			) {
				console.log(
					`[-] Player_${
						i + 1
					} surrendered with the Dealer actually having a natural`
				)
				console.log("[+] The Dealer's hand", dealer.cards)
				return
			} else {
				console.log('[+] The Game continues')
			}
		}
	}
	i = 0
	await playDealer(dealer, false)
	console.log("[+] The Dealer's hand", dealer.cards)
	for (i; i < playerCount; i++) {
		const player = players[i]
		if (player.cards_.length) {
			if (player.surrendered && player.surrendered_) continue
		} else {
			if (player.surrendered) continue
		}
		console.log(
			`[-] Player_${i + 1}'s balance before submitting:`,
			await player.balance(),
			reach.standardUnit
		)
		const result = await getOutcome(player, `Player_${i + 1}`)
		console.log(`[+] The outcome for Player_${i + 1} is:`, result)
		console.log(
			`[-] Player_${i + 1}'s balance after submitting:`,
			await player.balance(),
			reach.standardUnit
		)
	}
	i = 0
}
console.log('[+] Starting the Game...')
reach.withDisconnect(() =>
	dealer.ctc.p.D({
		bankAmount: reach.parseCurrency(9000),
		betAmount: reach.parseCurrency(100),
		deployed: async (betAmount) => {
			console.log('[+] Blackjack started')
			console.log(
				'[+] The Bank currently has',
				fmt((await dealer.ctc.v.bank())[1]),
				reach.standardUnit
			)
			console.log(
				`[+] The Dealer publishes the base bet: ${fmt(betAmount)} ${
					reach.standardUnit
				}`
			)
			await simulatePlay(4, 2)
			console.log(`[+] The Game has ended`)
			console.log(
				'[+] The Bank is left with',
				fmt((await dealer.ctc.v.bank())[1]),
				reach.standardUnit
			)
			reach.disconnect(null)
		},
	})
)
