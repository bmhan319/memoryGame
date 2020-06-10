document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
  ]

cardArray.sort( () => .5 - Math.random() )

//create game board
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenID = []
let cardsWon = []

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

//check for matches
function checkForMatch() {
  let cards = document.querySelectorAll('img')
  let optionOneID = cardsChosenID[0]
  let optionTwoID = cardsChosenID[1]
  if (cardsChosen[0] === cardsChosen[1]) {
    alert("Match")
    cards[optionOneID].setAttribute('src', 'images/white.png')
    cards[optionTwoID].setAttribute('src', 'images/white.png')
    cardsWon.push(cardsChosen)
  } else {
    alert('Sorry')
    cards[optionOneID].setAttribute('src', 'images/blank.png')
    cards[optionTwoID].setAttribute('src', 'images/blank.png')
  }
  cardsChosen = []
  cardsChosenID = []
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = "Congrats"
  }
}


//flip card
function flipCard() {
  let cardID = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardID].name)
  cardsChosenID.push(cardID)
  this.setAttribute('src', cardArray[cardID].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}



createBoard()
})