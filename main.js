const playerOne = document.querySelector('#player1')
const playerTwo = document.querySelector('#player2')
const button = document.querySelector('.button')
const result = document.querySelector('.game-result')
const hands = ["👊", "✌", "✋"]

const play = () => {
  playerOne.innerText = hands[Math.floor(Math.random() * 3)]
  playerTwo.innerText = hands[Math.floor(Math.random() * 3)]
  const playerOneHand = playerOne.innerText
  const playerTwoHand = playerTwo.innerText

  const a = playerOneHand
  const b = playerTwoHand
  if (a === b) {
    result.innerText = "It is a tie!"
  } else if ((a === "👊" && b === "✌") || (a === "✌" && b === "✋") || (a === "✋" && b === "👊")) {
    result.innerText = "Player 1 wins!"
  } else {
    result.innerText = "Player 2 wins!"
  }
}

button.addEventListener('click', (event) => {
  event.preventDefault()
  play()
})
