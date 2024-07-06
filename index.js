
let player = {
    name: "Samir",
    chips: 200,
    sayHello : function()
    {
        console.log("Heisann!");
    }
}

let cards = []
let sum=0;
let hasBlackJack = false
let isAlive = true;
let message = ""

let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

const startgame = document.querySelector(".startgame")
const newcard = document.querySelector(".newcard")

startgame.addEventListener('click', function(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum= firstCard+secondCard
    renderGame()

});

newcard.addEventListener('click', function(){
    if(isAlive==true && hasBlackJack===false)
        {
        let card = getRandomCard()
        sum+=card
        cards.push(card)
     console.log(cards)
        renderGame()
        }

});

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard()
{

 let randomNumber =Math.floor(Math.random() * 13) + 1
 if (randomNumber > 10) {
    return 10
} else if (randomNumber === 1) {
    return 11
} else {
    return randomNumber
}
}
 

function renderGame()
{

    cardsEl.textContent="Cards: "    
   for(let i=0; i< cards.length;i++)
   {

    cardsEl.textContent+=cards[i]+" "
   }
   
   console.log("start the Game");
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
       isAlive=false
    }
    messageEl.textContent = message     
    sumEl.textContent="Sum:"+sum 
     
}
