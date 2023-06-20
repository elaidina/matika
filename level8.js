document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: '626 + 70'
    },
    {
      name: '1',
      img: '696'
    },
    {
      name: '2',
      img: '35 + 42'
    },
    {
      name: '2',
      img: '77'
    },
    {
      name: '3',
      img: '41 - 5'
    },
    {
      name: '3',
      img: '36'
    },
    {
      name: '4',
      img: '87 - 34'
    },
    {
      name: '4',
      img: '53 '
    },
    {
      name: '5',
      img: '48 + 11 '
    },
    {
      name: '5',
      img: '59 '
    },
    {
      name: '6',
      img: '51 + 18'
    },
    {
      name: '6',
      img: '69 '
    },
    {
      name: '7',
      img: '100 - 35'
    },
    {
      name: '7',
      img: "65"
    },
    {
      name: '8',
      img: '7 623 - 2 000'
    },
    {
      name: '8',
      img: "5 623"
    },
    {
      name: '9',
      img: '99 - 37 '
    },
    {
      name: '9',
      img: '62'
    },
    {
      name: '10',
      img: '55 + 30'
    },
    {
      name: '10',
      img: '85'
    },
    {
      name: '11',
      img: '71 + 22'
    },
    {
      name: '11',
      img: '93'
    },
    {
      name: '12',
      img: '69 - 42'
    },
    {
      name: '12',
      img: '27'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 8 completed!</h2><a href='https://elaidina.github.io/matika/level9.html'> Continue to Level 9</a>";


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
