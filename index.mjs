import { test, loadStdlib } from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs'
const reach = loadStdlib()

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

const moves = ['Surrender', 'Continue']
/**
 * Surrender:
 * A player takes back half of his bet,
 * and gives the dealer half,
 * with strong suspicion the dealer has blackjack, this prompts
 * the dealer to check his cards, if he does have blackjack,
 * he reveals his hand and the round ends
 */

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

const outcomes = ['Player Wins', 'Dealer Wins', 'Push', 'Blackjack Win']
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

const shuffleDeck = (hearts, diamonds, spades, clovers) => {
	const newDeck = []
	const heartKeys = Object.keys(hearts)
	const diamondKeys = Object.keys(diamonds)
	const spadeKeys = Object.keys(spades)
	const cloverKeys = Object.keys(clovers)
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

const fmt = (x) => reach.formatCurrency(x, 4)
const balOf = async (who) => fmt(await reach.balanceOf(who))

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
const bet = reach.parseCurrency(100)
const ctc = accDealer.contract(backend)
console.log("[+] Welcome to Apostrophe's Blackjack Game")
const dealer = {
	account: accDealer,
	ctc,
	balance: async () => await balOf(accDealer),
	cards: [],
}
console.log('[+] The Dealer is ready')
const generatePlayers = async (amount) => {
	const players = {}
	let i = 0
	for (i; i < amount; i++) {
		const acc = await reach.newTestAccount(startingBalance)
		const ctc = acc.contract(backend, dealer.ctc.getInfo())
		players[`player_${i + 1}`] = {
			account: acc,
			ctc,
			balance: async () => await balOf(acc),
			cards: [],
			cards_: [],
			bet,
			bet_: 0,
			boughtInsurance: false,
			boughtInsurance_: false,
			surrendered: false,
			surrendered_: false,
		}
	}
	return players
}

const play = async (player, who) => {
	let result = false
	if (cardValue(player.cards) == 21) {
		console.log(`[+]${who} was dealt a natural`)
		// Possible blackjack win
		return result
	}
	if (
		(player.cards[0][0] == '8' || player.cards[0][0] == 'A') &&
		player.cards[0][0] == player.cards[1][0]
	) {
		// A split must occur
		player.cards_.push(player.cards.pop())
		dealCard(player.cards, 1)
		dealCard(player.cards_, 1)
		player.bet_ = bet
		console.log(`[+]${who} just made a split`)
	}
	const dealerFirstCard = dealer.cards[0][0]
	if (cardValue(player.cards) != 21) {
		const move = moves[Math.floor(Math.random() * moves.length)]
		if (dealerFirstCard == 'A') {
			const buyInsurance = Math.floor(Math.random() * 2)
			if (buyInsurance) {
				player.bet *= 2
				player.boughtInsurance = true
				console.log(`[+]${who} bought insurance`)
			}
		} else if (move == 'Surrender') {
			player.surrendered = true
			result = true
			console.log(`[+]${who} surrendered`)
		}
		if (move != 'Surrender') {
			let value = cardValue(player.cards)
			let keepPlaying = true
			while (keepPlaying && value < 21) {
				const choice = choices[Math.floor(Math.random() * choices.length)]
				if (
					cardValue(player.cards) == 9 ||
					cardValue(player.cards) == 10 ||
					cardValue(player.cards) == 11
				) {
					const doubleDown = Math.floor(Math.random() * 2)
					if (doubleDown) {
						player.bet *= 2
						dealCard(player.cards, 1)
						console.log(`[+]${who} doubled down`)
						break
					}
				}
				if (choice == 'Hit') {
					dealCard(player.cards, 1)
					console.log(`[+]${who} called for a hit`)
				} else if (choice == 'Stand') {
					console.log(`[+]${who} stood`)
					break
				}
				value = cardValue(player.cards)
			}
			console.log(`[+]${who}'s second card value is ${value}`)
		}
	}
	if (player.cards_) {
		if (cardValue(player.cards_) != 21) {
			const move = moves[Math.floor(Math.random() * moves.length)]
			if (dealerFirstCard == 'A') {
				const buyInsurance = Math.floor(Math.random() * 2)
				if (buyInsurance) {
					player.bet_ *= 2
					player.boughtInsurance_ = true
					console.log(`[+]${who} bought insurance`)
				}
			} else if (move == 'Surrender') {
				player.surrendered_ = true
				result = true
				console.log(`[+]${who} surrendered`)
			}
			if (move != 'Surrender') {
				let value = cardValue(player.cards_)
				let keepPlaying = true
				while (keepPlaying && value < 21) {
					const choice = choices[Math.floor(Math.random() * choices.length)]
					if (
						cardValue(player.cards_) == 9 ||
						cardValue(player.cards_) == 10 ||
						cardValue(player.cards_) == 11
					) {
						const doubleDown = Math.floor(Math.random() * 2)
						if (doubleDown) {
							player.bet_ *= 2
							dealCard(player.cards_, 1)
							break
						}
					}
					if (choice == 'Hit') {
						dealCard(player.cards_, 1)
					} else if (choice == 'Stand') {
						break
					}
					value = cardValue(player.cards_)
				}
				console.log(`[+]${who}'s second hand card value is ${value}`)
			}
		}
	}
	return result
}

const playDealer = async (dealer) => {
	if (cardValue(dealer.cards) == 21) {
		// Possible blackjack win
		try {
			await dealer.ctc.apis.Dealer.submitHand(
				cardValue(dealer.cards),
				dealer.cards.length
			)
		} catch (error) {
			console.log({ error })
		}
	} else {
		let value = cardValue(dealer.cards)
		let keepPlaying = true
		while (keepPlaying && value < 21) {
			const choice = Math.floor(Math.random() * 2)
			if (choice) {
				dealCard(dealer.cards, 1)
			} else {
				break
			}
			value = cardValue(dealer.cards)
		}
		try {
			await dealer.ctc.apis.Dealer.submitHand(
				cardValue(dealer.cards),
				dealer.cards.length
			)
		} catch (error) {
			console.log({ error })
		}
	}
	return
}

const getOutcome = async (player, who) => {
	const outcome = []
	if (!player.cards_) {
		try {
			const byteResponse = await player.ctc.apis.Player.getOutcome(
				cardValue(player.cards),
				player.cards.length,
				player.bet,
				player.boughtInsurance,
				player.surrendered
			)
			const response = noneNull(byteResponse)
			outcome.push(response)
		} catch (error) {
			console.log({ error })
		}
	} else {
		try {
			const byteResponse = await player.ctc.apis.Player.getOutcome(
				cardValue(player.cards),
				player.cards.length,
				player.bet,
				player.boughtInsurance,
				player.surrendered
			)
			const response = noneNull(byteResponse)
			outcome.push(response)
			const byteResponse_ = await player.ctc.apis.Player.getOutcome(
				cardValue(player.cards_),
				player.cards_.length,
				player.bet_,
				player.boughtInsurance_,
				player.surrendered_
			)
			const response_ = noneNull(byteResponse_)
			outcome.push(response_)
		} catch (error) {
			console.log({ error })
		}
	}
	return outcome
}

const dealCard = (cards, amount) => {
	let i = 0
	for (i; i < amount; i++) {
		cards.push(initialDeck.shift())
	}
}

const simulatePlay = async () => {
	const playerCount = 4
	let i = 0
	dealCard(dealer.cards, 2)
	const { player_1, player_2, player_3, player_4 } = await generatePlayers(4)
	console.log('[+] Players are seated')
	console.log('[+] Dealing their cards')
	for (i; i < playerCount; i++) {
		const player = [player_1, player_2, player_3, player_4][i]
		dealCard(player.cards, 2)
	}
	i = 0
	console.log('[+] Dealing complete')
	console.log('[+] Player can now play')
	for (i; i < playerCount; i++) {
		const player = [player_1, player_2, player_3, player_4][i]
		const playerSurrendered = await play(player, `Player_${i + 1}`)
		if (playerSurrendered) {
			await playDealer(dealer)
			const outcome = await getOutcome(player)
			if (outcome[0] == 'END' || (player.cards_ && outcome[1] == 'END')) {
				console.log(
					`Player_${
						i + 1
					} surrendered with the Dealer actually having a blackjack`
				)
				console.log(`The Game has ended`)
			}
		}
	}
	i = 0
	await playDealer(dealer)
	for (i; i < playerCount; i++) {
		const player = [player_1, player_2, player_3, player_4][i]
		const result = await getOutcome(player)
		console.log('The outcome for Player_' + i + 1 + ' is:', result)
	}
	i = 0
}
console.log('[+] Starting the Game...')
const startGame = async () => {
	return await reach.withDisconnect(() =>
		dealer.ctc.p.D({
			bankAmount: reach.parseCurrency(900),
			deployed: async () => {
				console.log('[+] Blackjack started')
				await simulatePlay()
				reach.disconnect(null)
			},
		})
	)
}

await new Promise((resolve) => async () => {
	await startGame()
	resolve()
})
