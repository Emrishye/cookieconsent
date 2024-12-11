"use-strict";

const closeBtn = document.querySelectorAll(".close-btn");
const container = document.querySelector(".container");
const hidden = document.querySelector(".overlay");

const closeCookie = function () {
  container.classList.add("hidden");
  hidden.classList.add("hidden");
};

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", closeCookie);
}
