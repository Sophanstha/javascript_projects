let btn = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new");
let msgcon = document.querySelector(".msg-container ");
let msg = document.querySelector(".msg");
let trun = true;

let winpatten = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
btn.forEach((box) => {
  box.addEventListener("click", () => {
    if (trun === true) {
      box.innerHTML = "0";
      trun = false;
    } else {
      box.innerHTML = "x";
      trun = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

function regame() {
  trun = true;
  msgcon.classList.add("hide");
  enable();
}

function disable() {
  for (let d of btn) {
    d.disabled = true;
  }
}

function enable() {
  for (let d of btn) {
    d.disabled = false;
    d.innerHTML = "";
  }
}

function showWinner(winner) {
  msg.innerHTML = ` ${winner} Win`;
  msgcon.classList.remove("hide");
  disable();
}

function checkwinner() {
  for (i of winpatten) {
    console.log(i[0], i[1], i[2]);
    console.log(btn[i[0]].innerText,
         btn[i[1]].innerText
         , btn[i[2]].innerText
         );
    let val1 = btn[i[0]].innerText;
    let val2 = btn[i[1]].innerText;
    let val3 = btn[i[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3 && val3 === val1) {
        console.log("winner ", val1);
        showWinner(val1);
      }
    }
  }
}

reset.addEventListener("click", regame);
newgame.addEventListener("click", regame);
