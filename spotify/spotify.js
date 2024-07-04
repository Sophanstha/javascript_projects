console.log("soptify")
let index = 0;
let audioele = new Audio('song0.mp3')
let masterplay = document.querySelector("#masterplay");
let gif = document.querySelector("#gif")
let progressbar = document.querySelector("#range")
let songs =Array.from( document.querySelectorAll(".sonbanner"));
let img = document.querySelectorAll(".sonbanner img")
let songname = document.querySelector("#songname")
// console.log(img)
let cls = document.getElementsByClassName("loko")
let song =[
    {
        name : "jhalya bata ",
        path : 'song0.mp3',
        cover : "https://neostuffs.com/wp-content/uploads/2023/12/sushant-kc-jhyal-bata.jpg",
        time: "3:47",
    },
    {
        name : "all eyes on me",
        path : 'song1.m4a',
        cover : "https://i.scdn.co/image/ab67616d0000b273f35b8a6c03cc633f734bd8ac",
        time : "2:43"
    },
    {
        name : "gone",
        path : 'song2.mp3',
        cover : "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Ros%C3%A9_-_Gone.jpg/220px-Ros%C3%A9_-_Gone.jpg"
        ,time :"3:40"
    },
    {
        name : "stayforever",
        path : 'song3.mp3',
        cover : "https://static.wixstatic.com/media/a996b4_1a251141cb404697993d95cd19889f80~mv2.jpg/v1/fill/w_640,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a996b4_1a251141cb404697993d95cd19889f80~mv2.jpg"
        ,time :"2:21"
        
    },
    {
        name : "Angel baby ",
        path : 'song4.mp3',
        cover : "https://i.pinimg.com/originals/8b/98/43/8b9843dcc2a43bc3e499f76fe1651797.jpg"
        ,time :"3:41"

    },
    {
        name : "somebody to you ",
        path : 'song5.mp3',
        cover : "https://i.pinimg.com/originals/eb/0e/2c/eb0e2c2e8a23d22e9cb5d7c53ea1636e.jpg"
        ,time :"3:06"
        
    },
    {
        name : "one kiss",
        path : 'song6.mp3',
        cover : "https://i.ytimg.com/vi/y4bNDvwQobY/maxresdefault.jpg"
        ,time :"3:43"
    }
]
songs.forEach( function(element , i){
    // console.log(element, i)
    element.querySelectorAll("img")[0].src=song[i].cover
    element.querySelectorAll("#text")[0].innerText = song[i].name
//    let n = element.querySelectorAll(".time")[0]
// console.log(n.childNodes)

    
// console.log(my)
})
// handling the play button
masterplay.addEventListener('click' , function(){
    if(audioele.paused || audioele.currentTime <= 0){
    audioele.play()
    masterplay.classList.remove("fa-circle-play")
    masterplay.classList.add("fa-circle-pause")
     gif.style.opacity = 1;

    }
    else{
        audioele.pause();
        masterplay.classList.add("fa-circle-play")
        masterplay.classList.remove("fa-circle-pause")
        gif.style.opacity = 0;

    }
})
audioele.addEventListener('timeupdate',function(){
    var process = parseInt((audioele.currentTime/audioele.duration)*100)
    // console.log(process)
    progressbar.value = process;
})
progressbar.addEventListener('change',function(){
    audioele.currentTime = progressbar.value*audioele.duration / 100;  
})
function multiple(){
    Array.from(cls).forEach( (ele)=>{
        ele.classList.remove("fa-circle-pause")   
        ele.classList.add("fa-circle-play")
           
    } )
}
Array.from(cls).forEach( (ele)=>{
    ele.addEventListener('click',(e)=>{
        multiple()
         index = parseInt(e.target.id)
        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause")
        audioele.src= `song${index}.mp3`
        audioele.currentTime = 0;
        audioele.play()
        masterplay.classList.remove("fa-circle-play")
        masterplay.classList.add("fa-circle-pause")
        songname.innerText = song[index].name
        gif.style.opacity =1;
    })
} )
document.querySelector("#next").addEventListener('click' , function(){
    if(index >= 9){
        index =0;
    }
    else{
        index++;
    }
    audioele.src= `song${index}.mp3`
    audioele.currentTime = 0;
    audioele.play()
    songname.innerText = song[index].name
    gif.style.opacity =1;
    masterplay.classList.remove("fa-circle-play")
    masterplay.classList.add("fa-circle-pause")
})
document.querySelector("#prev").addEventListener('click' , function(){
    if(index <=0){
        index =0;
    }
    else{
        index-=1;
    }
    audioele.src= `song${index}.mp3`
    audioele.currentTime = 0;
    audioele.play()
    songname.innerText = song[index].name
    gif.style.opacity =1;
    masterplay.classList.remove("fa-circle-play")
    masterplay.classList.add("fa-circle-pause")
})












