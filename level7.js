document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: '6 . 6'
    },
    {
      name: '1',
      img: '36 '
    },
    {
      name: '2',
      img: '770+120 '
    },
    {
      name: '2',
      img: '890 '
    },
    {
      name: '3',
      img: '18+51'
    },
    {
      name: '3',
      img: '69 '
    },
    {
      name: '4',
      img: '260+520'
    },
    {
      name: '4',
      img: '780 '
    },
    {
      name: '5',
      img: '17'
    },
    {
      name: '5',
      img: '58-41'
    },
    {
      name: '6',
      img: '44+5 '
    },
    {
      name: '6',
      img: '49'
    },
    {
      name: '7',
      img: '27+5'
    },
    {
      name: '7',
      img: "32"
    },
    {
      name: '8',
      img: '810+150'
    },
    {
      name: '8',
      img: "960 "
    },
    {
      name: '9',
      img: '44-40'
    },
    {
      name: '9',
      img: "4"
    },
    {
      name: '10',
      img: '99-53'
    },
    {
      name: '10',
      img: '46 '
    },
    {
      name: '11',
      img: '79 '
    },
    {
      name: '11',
      img: '37+42'
    },
    {
      name: '12',
      img: '81+15'
    },
    {
      name: '12',
      img: '96'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 7 completed!</h2><a href='https://elaidina.github.io/matika/level8.html'> Continue to Level 8</a>";


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
