/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";

const trigers = {
  btn: document.getElementById("submit"),
};

trigers.btn.addEventListener("click", () => {
  const toHide = document.querySelector(".bnt-container__button-desc");
  const unhide = document.querySelector(".spinner-container");
  toHide.style.visibility = "hidden";
  unhide.style.visibility = "visible";

  setTimeout(() => {
    toHide.style.visibility = "visible";
    unhide.style.visibility = "hidden";
  }, 3000);
});
