let text = document.querySelector("h5")
let add = document.querySelector("#add")
// let remove =document.querySelector('#remove')
let flag =0;


add.addEventListener( 'click',()=>{
    if(flag == 0){
    text.innerHTML = "following"
   text.style.color = "green"
   add.innerHTML = "following"
   flag = 1
    }
    else{
        text.innerHTML = "follow"
        text.style.color = "red"
        add.innerHTML="follow"
        flag = 0

    }


} )

// remove.addEventListener( 'click' , ()=>{
//     text.innerHTML = "Stranger"
//     text.style.color = "red" 
// } )