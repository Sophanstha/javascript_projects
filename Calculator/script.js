let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
// console.log(buttons);
let arr = Array.from(buttons);
let string = "";
arr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.target.innerHTML);
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "Del") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
