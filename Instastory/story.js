let arr =[
    {
        dp : "powfu.png",
        story:" https://i.pinimg.com/736x/4f/ae/d2/4faed227cf34c75cf5bf50e9967306ed.jpg",
    },
    {
        dp : "https://i.pinimg.com/474x/48/bf/ba/48bfba39a612bcdeff8dd216197f956c.jpg",
        story:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Ros%C3%A9_BLACKPINK_PUBG_Mobile_Sept_2020_ad.png/170px-Ros%C3%A9_BLACKPINK_PUBG_Mobile_Sept_2020_ad.png",
    },
    {
        dp: "https://people.com/thmb/d18lFGMLSGnBrWCRJuAIlcxXsDM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(599x0:601x2)/Zayn-Malik-1d13bae1f595495b859e236f08e35bc9.jpg",
        
        story:" https://www.thesun.co.uk/wp-content/uploads/2023/07/zayn-malik-gigi-hadid-attend-795371281.jpg",
    },
    {
        dp :"https://people.com/thmb/tAHgiUDeD26XzGGTLVhDHyxJlog=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/olivia-rodrigo-conan-grey-090623-tout-44a36a8b432c491580bc1ebcd2eaf5b7.jpg",
        story:" https://m.media-amazon.com/images/I/81RlWe2SiNL._UF1000,1000_QL80_.jpg",
    },

]
let flag = ""
arr.forEach( (ele , ind)=>{
    flag += `<div class="story">
    <img id="${ind}" src="${ele.dp}">
</div> `
} )
let mydp = document.querySelector(".storiyan")
mydp.innerHTML = flag

mydp.addEventListener( 'click',function(dets){
    let mystory = arr[dets.target.id].story
    // console.log(mystory);
    let full = document.querySelector("#full-size")
    full.style.display = "block"
    full.style.backgroundImage = `url(${mystory})`

    setTimeout( ()=>{
        full.style.display = "none"
    },1500 )
} )










