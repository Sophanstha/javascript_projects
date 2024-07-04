let buttons = document.querySelectorAll(".button")
// console.log(button)
let body = document.querySelector("body")

buttons.forEach( (button)=>{
    button.addEventListener('click',(e)=>{
        // console.log(e)
        // console.log(e.target)
        if(e.target.id === "green"){
        body.style.backgroundColor=/*"green"  or ew can do */ e.target.id // -> inside  this we have our id name and our id name is green
        }
        if(e.target.id === "red"){
        body.style.backgroundColor=/*"green"  or ew can do */ e.target.id // -> inside  this we have our id name and our id name is green
        }
        if(e.target.id === "blue"){
        body.style.backgroundColor=/*"green"  or ew can do */ e.target.id // -> inside  this we have our id name and our id name is green
        }
        if(e.target.id === "black"){
        body.style.backgroundColor=/*"black"  or ew can do */ e.target.id // -> inside  this we have our id name and our id name is green
        }
    })
} )