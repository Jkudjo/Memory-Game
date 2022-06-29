const cardArray =[
  {
    name:"fries",
    img:"assets/fries.png",

  },
  {
    name:"cheese-burger",
    img:"assets/Cheeseburger.png",

  },
  {
    name:"ice-cream",
    img:"assets/ice-cream.png",

  },
  {
    name:"hotdog",
    img:"assets/hotdog.png",

  },
  {
    name:"milkshake",
    img:"assets/milkshake.png",

  },
  {
    name:"pizza",
    img:"assets/pizza.png",

  },
  
  {
    name:"fries",
    img:"assets/fries.png",

  },
  {
    name:"cheese-burger",
    img:"assets/Cheeseburger.png",

  },
  {
    name:"ice-cream",
    img:"assets/ice-cream.png",

  },
  {
    name:"hotdog",
    img:"assets/hotdog.png",

  },
  {
    name:"milkshake",
    img:"assets/milkshake.png",

  },
  {
    name:"pizza",
    img:"assets/pizza.png",

  },
 
  
]

cardArray.sort(() => 0.5 - Math.random())


const gridDisplay = document.querySelector("#grid")
const resultDisplay =document.querySelector('#result')
let cardsChosen=[]
let cardsChosenIds=[]
const card1 =[]

// console.log(gridDisplay)

function createBoard() {

  for (let i=0; i<cardArray.length ; i++){
    const card =document.createElement("img")
    card.setAttribute('src', "assets/blank.jpg")
    card.setAttribute("data-id",i)
    card.addEventListener('click',flipCard)
    gridDisplay.appendChild(card)
    


  }
  
}

createBoard()

function checkMatch() {

  const cards= document.querySelectorAll('img')  
  const optionOneId =cardsChosen[0]
  const optionTwoId = cardsChosen[1]

  console.log(cards)
  if(optionOneId == optionTwoId) {
    alert("you have clicked the same image!")
  }


  console.log('check for match')
  if(cardsChosen[0]==cardsChosen[1]){

    alert('you found a match') 

    cards[optionOneId].setAttribute('src','assets/white.png')
    cards[optionTwoId].setAttribute('src','assets/white.png')
    cards[optionOneId].removeEventListener('click' ,flipCard)
    cards[optionTwoId].removeEventListener('click' ,flipCard)
    
    cardsWon.push(cardsChosen)
   
  }else{
    cards[optionOneId].setAttribute('src','assets/blank.jpg')
    cards[optionTwoId].setAttribute('src','assets/blank.jpg')

    alert("Sorry, Try again!")

  }
  resultDisplay.textContent =cardsWon.length
  cardsChosen=[]
  cardsChosenIds=[]

  if(cardsWon.length==cardArray.length/2){
    resultDisplay.innerHTML = "Congratulation, You found them all"

  }

  
}

function flipCard(){
  
  const cardId = this.getAttribute("data-id")
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  console.log(cardsChosen)
  console.log(cardsChosenIds)

  this.setAttribute('src',cardArray[cardId].img)

  if(cardsChosen.length ===2){
    setTimeout(checkMatch, 500)
  }

}