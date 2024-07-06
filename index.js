
let player = {
    name: "Samir",
    chips: 200,
    sayHello : function()
    {
        console.log("Heisann!");
    }
}

let cards = []
let hasBlackJack = false
let isAlive = true;
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

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

function startGame()
{
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum= firstCard+secondCard
    renderGame()
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

function newCard()
{

    if(isAlive==true && hasBlackJack===false)
    {
    let card = getRandomCard()
    sum+=card
    cards.push(card)
 console.log(cards)
    renderGame()
    }
    console.log("Drawing a new card from the deck!")

}