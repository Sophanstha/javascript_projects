let ramdonnum = parseInt(Math.random()*100+1)
let sumbitB = document.querySelector("#subt")
let userval = document.querySelector("#guessfield")
let guessSolt = document.querySelector(".guesses")
let remaining = document.querySelector(".lastresul")
let loworhi = document.querySelector(".loworhi")
let Starover = document.querySelector(".resultparas")

const p = document.createElement("p")
let prevguess = []
let numguess = 1;
let playGame = true;
 
if(playGame){
    sumbitB.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userval.value)
        console.log(guess)
        ValitedGuess(guess);
    })
}

function ValitedGuess(guess){
    // 
    if(isNaN(guess)){
        alert("please enter the number")
    }
    else if(guess<1){
    alert("please enter the number more than 0")
    }
    else if(guess>=100){
    alert("please enter the number less than 101")
    }
    else{
        prevguess.push(guess);
        if(numguess === 11){
            displayGuess(guess);
            displayMsg(`game is over and random number is ${ramdonnum}`)
            endGAME();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === ramdonnum){
        displayMsg("you gave ggot the correct no")
        endGAME()
    }
    else if(guess< ramdonnum){
        displayMsg("number is tooo low")
    }
    else if(guess > ramdonnum){
    displayMsg("number is too high")
    }
}

function displayGuess(guess){
    userval.value = '';
    guessSolt.innerHTML +=`${guess}, `
    numguess++
    remaining.innerHTML = 11-numguess  
}
function displayMsg(msg){
loworhi.innerHTML = `${msg}`
}

function endGAME(){
    userval.value = ""
    userval.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = '<h2 id="newgame">Start</h2>'
    Starover.appendChild(p)
    playGame = false;
    newGame()    
}

function newGame(){
let newGamestart = document.querySelector("#newgame")
newGamestart.addEventListener('click',function(e){
    ramdonnum =parseInt(Math.random()*100+1)
    prevguess =[]
    numguess=1
    remaining.innerHTML = `${11 - numguess}`  
    guessSolt.innerHTML ='';
    userval.removeAttribute('disabled')
    Starover.removeChild(p)
    playGame = true;

})     

}

