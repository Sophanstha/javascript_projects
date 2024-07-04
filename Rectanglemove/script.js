
window.addEventListener('mousemove',function(details){
let rec = document.querySelector(".rec")
  var xval= gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + rec.getBoundingClientRect().width,
    window.innerWidth - (100 + rec.getBoundingClientRect().width),
    details.clientX,
  );
    gsap.to(".rec",{
        left :xval,
        ease : Power3

    })
})