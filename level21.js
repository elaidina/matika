document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Miška si spoří peníze. V prasátku už má 67 korun. Od babičky teď dostala 20 korun. Kolik korun má teď?'
    },
    {
      name: '1',
      img: '87 '
    },
    {
      name: '2',
      img: 'Na zahradě roste 35 jabloní a 28 hrušek. Kolik ovocných stromů tam roste?'
    },
    {
      name: '2',
      img: '63'
    },
    {
      name: '3',
      img: 'Mirka přečte za týden 83 stránek, Ondřej přečte 59 stránek. O kolik míň přečte Ondřej za týden? '
    },
    {
      name: '3',
      img: '24'
    },
    {
      name: '4',
      img: 'Adam má dva sešity. V prvním zapsal 9 stránek a v druhém o 5 stránek víc. Kolik stran už zapsal?'
    },
    {
      name: '4',
      img: "23 "
    },
    {
      name: '5',
      img: 'Denis koupil dvě zmrzliny. První stála 18 korun a druhá 11 korun. Kolik mu vydali, když platil 50-korunou? '
    },
    {
      name: '5',
      img: ' 21 '
    },
    {
      name: '6',
      img: 'Mamička má 43 let. Je o 6 let mladší než táta. Kolik let je tátovi?'
    },
    {
      name: '6',
      img:  "49 "
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 21 completed!</h2><a href='https://elaidina.github.io/matika/level22.html'> Continue to Level 12</a>";


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
