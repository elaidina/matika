document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: '10 + x = 20'
    },
    {
      name: '1',
      img: '10 '
    },
    {
      name: '2',
      img: '8 . x = 64'
    },
    {
      name: '2',
      img: '8'
    },
    {
      name: '3',
      img: '99 : 11 = x '
    },
    {
      name: '3', 
      img: '9'
    },
    {
      name: '4',
      img: '100 - x = 25 '
    },
    {
      name: '4',
      img: '75'
    },
    {
      name: '5',
      img: '60 : 20 = x'
    },
    {
      name: '5',
      img: "3"
    },
    {
      name: '6',
      img: '56 : x = 8'
    },
    {
      name: '6',
      img: "7"
    },
    {
      name: '7',
      img: 'x . 8 = 48'
    },
    {
      name: '7',
      img: '6'
    },
    {
      name: '8',
      img: '57 + x = 62'
    },
    {
      name: '8',
      img: '5'
    },
    {
      name: '9',
      img: '120 + x = 200'
    },
    {
      name: '9',
      img: '80'
    },
    {
      name: '10',
      img: '98 - x = 80'
    },
    {
      name: '10',
      img: '18'
    },
    {
      name: '11',
      img: '36 - x = 24 '
    },
    {
      name: '11',
      img: '12'
    },
    {
      name: '12',
      img: '87 + x = 101'
    },
    {
      name: '12',
      img: "14 "
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 20 completed!</h2><a href='https://elaidina.github.io/matika/level21.html'> Continue to Level 21</a>";


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
