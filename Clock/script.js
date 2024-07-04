let hrs = document.querySelector("#hour")
let min = document.querySelector("#min")
let sec = document.querySelector("#sec")

function displaytime(){
let date = new Date()

let hh = date.getHours()
let mm = date.getMinutes()
let ss = date.getSeconds()

let hRotation = (hh*30) + mm/2
let mRotation = 6*mm
let sRotation = 6*ss
hrs.style.transform = `rotate(${hRotation}deg) `
min.style.transform = `rotate(${mRotation}deg) ` 
sec.style.transform = `rotate(${sRotation}deg) ` 

}
setInterval( displaytime,1000 )