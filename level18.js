document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: '0,5 + 1,5 '
    },
    {
      name: '1',
      img: ' 2'
    },
    {
      name: '2',
      img: '8,2 + 0,8 '
    },
    {
      name: '2',
      img: '9'
    },
    {
      name: '3',
      img: '0,2 + 0,6'
    },
    {
      name: '3',
      img: "0,8 "
    },
    {
      name: '4',
      img: '1,25 + 1,25 '
    },
    {
      name: '4',
      img: '2,5 '
    },
    {
      name: '5',
      img: '5,5 + 5,5'
    },
    {
      name: '5',
      img: '11'
    },
    {
      name: '6',
      img: ' 14,5 - 4,5'
    },
    {
      name: '6',
      img: "10"
    },
    {
      name: '7',
      img: '100,1 + 10'
    },
    {
      name: '7',
      img: "110,1 "
    },
    {
      name: '8',
      img: '10 - 0,1'
    },
    {
      name: '8',
      img: '9,9'
    },
    {
      name: '9',
      img: '3,5 - 0,5 '
    },
    {
      name: '9',
      img: ' 3'
    },
    {
      name: '10',
      img: '11,5 + 1,5 '
    },
    {
      name: '10',
      img: "13 "
    },
    {
      name: '11',
      img: '5 + 6,2'
    },
    {
      name: '11',
      img: '11,2'
    },
    {
      name: '12',
      img: '80 - 0,5 '
    },
    {
      name: '12',
      img: "79,5"
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

 


  function createBoard() {
    cardArray.forEach (function (item, i ) {
      const cardd = document.createElement('div')
      cardd.setAttribute('class', "box")
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = item.img
      cardd.setAttribute('data-id', i)
      cardd.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    })
  }  

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
     if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')

cards[optionOneId].parentElement.classList.remove("green")
      

      

      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio ("images/sound.mp3")
audio.play();
      // alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      cards[optionOneId].parentElement.setAttribute('class', 'hide')
      cards[optionTwoId].parentElement.setAttribute('class', 'hide')

    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cards[optionOneId].parentElement.classList.remove("green")
      cards[optionTwoId].parentElement.classList.remove("green")
      var audio1 = new Audio ("images/nothing.mp3")
audio1.play();
      // alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 18 completed!</h2><a href='https://elaidina.github.io/matika/level19.html'> Continue to Level 19</a>";


      var audio3 = new Audio ("images/end.mp3")
audio3.play();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    
    this.classList.add("green")
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    
  }

  createBoard()
})
