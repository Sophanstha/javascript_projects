// start 
let from = document.querySelector("from")
// let height = document.querySelector("height").value-> this will give you empty value so we must select the value inside the event

from.addEventListener('click',function(e){
    e.preventDefault()// this function 
    const height = parseInt( document.querySelector(".height").value);
    const weight = parseInt(document.querySelector(".weight").value)
    let result = document.querySelector("#result")
    if(height == " " || height < 0 || isNaN(height)){
    result.innerHTML="please enter the vaild value of height "
    }
    else if(weight == " " || weight < 0 || isNaN(weight)){
    result.innerHTML="please enter the vaild value weight"
    }
    else{
        let bmi = (weight / ((height*height)/10000)).toFixed(2)
        result.textContent = bmi
    }

})
// console.log("it work ????????????")

