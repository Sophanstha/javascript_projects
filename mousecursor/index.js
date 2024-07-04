let main = document.querySelector("#main")
let crs = document.querySelector(".cursor")

main.addEventListener("mousemove" , function(dets){
    // console.log(dets.y)
    crs.style.left = dets.x+"px"
    crs.style.top = dets.y+"px"
    crs.style.opacity = 1
})