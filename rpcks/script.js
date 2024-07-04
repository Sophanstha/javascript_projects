let usersccor = 0;
let compscoor = 0;
let choice = document.querySelectorAll(".choice");
let msg = document.querySelector(".msgbox");

let you = document.querySelector("#you");
let comm = document.querySelector("#com");

function winning(userWin) {
  if (userWin == true) {
    console.log("you win");
    usersccor++;

    msg.innerHTML = "you win.... &#128512;";
    msg.style.backgroundColor = "green";
    you.innerHTML = usersccor;
  } else {
    compscoor++;
    console.log("you loss");
    msg.innerHTML = "you loss....&#128543";
    msg.style.backgroundColor = "red";
    comm.innerHTML = compscoor;
  }
}

function generatecom() {
  let arr = ["rock", "paper", "scissor"];
  let ind = Math.floor(Math.random() * 3);
  let comchoice = arr[ind];
  return comchoice;
}

function drawgame() {
  msg.innerHTML = "play Again ! game is draw";
  msg.style.backgroundColor = "brown";
}

function playGame(userchoice) {
  let comchoice = generatecom();
  if (comchoice == userchoice) {
    drawgame();
  } else {
    let userWin = true;
    if (userchoice === "rock") {
      //paper , scissor
      userWin = comchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userWin = comchoice === "rock" ? true : false;
    } else {
      userWin = comchoice === "paper" ? true : false;
    }
    winning(userWin);
  }
}

choice.forEach((cho) => {
  cho.addEventListener("click", () => {
    let userchoice = cho.getAttribute("id");
    // console.log(userchoice)
    playGame(userchoice);
  });
});
