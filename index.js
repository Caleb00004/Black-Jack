let cards = []
let sum = 0
let blackjack = false
let isAlive = false
let message = document.getElementById("message")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")

let player = {
	name: "caleb",
	chips: 150 
}

function getRandomCard() {
	randomNumber = Math.floor(Math.random() * 13) + 1
	if (randomNumber === 1) {
		return 11
	} else if (randomNumber > 10) {
		return 10
	} else {
		return randomNumber
	}
}

function startGame(){
	isAlive = true
	let num1 = getRandomCard()
	let num2 = getRandomCard()
	cards = [num1, num2]
	sum = num1 + num2


	renderGame()
}


function renderGame() {
	sumEl.textContent = "sum: " + " " + sum
	cardsEl.textContent = "cards: " + " " + cards
	playerEl.textContent = player.name +": "+ player.chips + "$"
	
	if (sum <= 20){ 
		message.textContent = "Do you want to draw a new card" 
		isAlive = true

	} else if(sum === 21){
		message.textContent = "You have blackjack you won"
		blackjack = true
	}else {
		message.textContent = "You have lost"
		isAlive = false
	}
	console.log(message)
}


function newCard() {
	console.log("button is clicked")
	if (isAlive == true && blackjack == false ){
		let newcard = getRandomCard()
		sum += newcard
		cards.push(newcard)
		renderGame()
	}
}


