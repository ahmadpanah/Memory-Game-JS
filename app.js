document.addEventListener('DOMContentLoaded' , () => {

const cardArray = [
    {
        name: 'apple',
        img: 'images/apple.png'
    },
    {
        name: 'banana',
        img: 'images/banana.png'
    },
    {
        name: 'cherry',
        img: 'images/cherry.png'
    },
    {
        name: 'coconut',
        img: 'images/coconut.png'
    },
    {
        name: 'pineapple',
        img: 'images/pineapple.png'
    },
    {
        name: 'strawberry',
        img: 'images/strawberry.png'
    },
    {
        name: 'wartermelon',
        img: 'images/watermelon.png'
    },
    {
        name: 'apple',
        img: 'images/apple.png'
    },
    {
        name: 'banana',
        img: 'images/banana.png'
    },
    {
        name: 'cherry',
        img: 'images/cherry.png'
    },
    {
        name: 'coconut',
        img: 'images/coconut.png'
    },
    {
        name: 'pineapple',
        img: 'images/pineapple.png'
    },
    {
        name: 'strawberry',
        img: 'images/strawberry.png'
    },
    {
        name: 'wartermelon',
        img: 'images/watermelon.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

function createBoard () {
    for (let i=0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click' , flipCard)
        grid.appendChild(card)
    }
}

// Check for Correct Match
function checkForMatch() {
    var cards = document.querySelectorAll('img')
        const optionOneID = cardsChosenId[0]
        const optionTwoID = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert("Correct! ♥")
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneID].setAttribute('src' , 'images/blank.png')
            cards[optionTwoID].setAttribute('src' , 'images/blank.png')
            alert("Sorry! Wrong Select!")
        }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cards.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'You Found them All!'
    }

}
// Flip Card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src' , cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch , 200)
    }

} 

createBoard()

})