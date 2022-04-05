const btnHamburger = document.getElementById("btnHamburger");
const header = document.querySelector(".header");
const fadElems = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

btnHamburger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    body.classList.remove("noscroll");
    fadElems.forEach((el) => {
      el.classList.remove("fade-in");
      el.classList.add("fade-out");
    });
  } else {
    body.classList.add("noscroll");
    header.classList.add("open");
    fadElems.forEach((el) => {
      el.classList.remove("fade-out");
      el.classList.add("fade-in");
    });
  }
});
