let btn = document.querySelector("button")
let textcontenter = document.querySelector(".joke")
// console.log(textcontenter)
let url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
btn.addEventListener('click',function(){
    textcontenter.classList.remove("flag")
    fetch(url)
.then((data)=>{
   return data.json()
}).then((iten)=>{
    textcontenter.textContent = `${iten.joke}`
    textcontenter.classList.add("flag")
} )
} )