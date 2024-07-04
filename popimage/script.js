const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};
let center = document.querySelector(".center");

center.addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    let div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";
    let img = document.createElement("img");

    img.setAttribute(
      "src",
      "https://img.kpopjuice.com/member/cf165e13cd583dacaa8451cada477c38_l.jpg"
    );
    div.appendChild(img);
    document.body.appendChild(div);
    gsap.to(img, {
      y: "0",
      ease: Power3,
      duration: 0.6,
    });
    gsap.to(img, {
      y: "100%",
      ease: Power3,
      // duration:.6,
      delay: 0.6,
    });
    setTimeout(() => {
      div.remove();
    }, 1000);
  }, 500)
);
