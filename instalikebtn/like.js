let con = document.querySelector("#container")
let i = document.querySelector("i")

con.addEventListener("dblclick", ()=>{
    i.style.transform = "translate(-50%,-50%) scale(1)"
    i.style.color= "#E82222"

    setTimeout( ()=>{
        i.style.opacity=0.7
    },500 )

    setTimeout( ()=>{
    i.style.transform = "translate(-50%,-50%) scale(0)"
    },1000 )
})