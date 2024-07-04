let rec = document.querySelector(".center")
rec.addEventListener('mousemove',(dets)=>{
    let location = rec.getBoundingClientRect() //-> this will give you the location of the rectangle 

    // console.log(dets.x-location.left)
    let insiderectval = dets.x- location.left
    // console.log(insiderectval);
    if(insiderectval < location.width/2){
        let redcolor = gsap.utils.mapRange(0,location.width/2, 255,0 ,insiderectval)
        gsap.to(rec ,{
            backgroundColor : rgb(`${redcolor},0 ,0`),
            ease:Power4
        });
        
    }else{
        let bluecolor = gsap.utils.mapRange(location.width/2,location.width, 0,255 ,insiderectval)
        gsap.to(rec ,{
            backgroundColor : rgb(`0,0,${bluecolor}`),
            ease:Power4
        });
    }
})

// rec.style.backgroundColor = rgb(255,0,0) 
