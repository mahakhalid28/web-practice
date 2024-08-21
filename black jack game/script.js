
let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = true
let message = ""

// let sumEl = document.getElementById("sum-El")
let sumEl = document.querySelector("#sum-El")
let cardEl = document.getElementById("cards-El")

let player = {
    name: "Per",
    chips: 145

}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ":$" + player.chips



let messageEl = document.getElementById("message-el")
console.log(messageEl)

function StartGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum > 10) {
        return 10
    }
    else if (randomNum === 1) {
        return 11
    }
    else {
        return randomNum
    }

}

function renderGame() {
    cardEl.textContent = "Cards :"
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    }
    else if (sum === 21) {
        message = "Wohoo! You'have got blackjack!"
        hasBlackJack = true
    }
    else {
        message = "You are out of game!"
        isAlive = false
    }
    messageEl.textContent = message

}
function NewCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }

}