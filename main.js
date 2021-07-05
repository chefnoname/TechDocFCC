const techDropdown = document.querySelector(".techDrop");
const techContentBox = document.querySelector(".techContent");
const techCaret = document.querySelector(".techCaret");

const refDropdown = document.querySelector(".refDrop");
const refContentBox = document.querySelector(".refContent");
const refCaret = document.querySelector(".refCaret");

const feedDropdown = document.querySelector(".feedDrop");
const feedContentBox = document.querySelector(".feedContent");
const feedCaret = document.querySelector(".feedCaret");

techDropdown.addEventListener("click", () => {
  techContentBox.classList.toggle("show");
  techCaret.classList.toggle("fa-caret-right");
  techCaret.classList.toggle("fa-caret-down");
});

refDropdown.addEventListener("click", () => {
  refContentBox.classList.toggle("show");
  refCaret.classList.toggle("fa-caret-right");
  refCaret.classList.toggle("fa-caret-down");
});

feedDropdown.addEventListener("click", () => {
  feedContentBox.classList.toggle("show");
  feedCaret.classList.toggle("fa-caret-right");
  feedCaret.classList.toggle("fa-caret-down");
});
