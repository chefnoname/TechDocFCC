const techDropdown = document.querySelector(".techDrop");
const techContentBox = document.querySelector(".techContent");
const techCaret = document.querySelector(".techCaret");

const refDropdown = document.querySelector(".refDrop");
const refContentBox = document.querySelector(".refContent");
const refCaret = document.querySelector(".refCaret");

const feedDropdown = document.querySelector(".feedDrop");
const feedContentBox = document.querySelector(".feedContent");
const feedCaret = document.querySelector(".feedCaret");

const firstTech = document.querySelector(".firstTech");
const firstRef = document.querySelector(".firstRef");
const firstFeed = document.querySelector(".firstFeed");

techDropdown.addEventListener("click", () => {
  techContentBox.classList.toggle("show");
  techCaret.classList.toggle("fa-caret-right");
  techCaret.classList.toggle("fa-caret-down");

  if (
    refContentBox.classList.contains("show") ||
    feedContentBox.classList.contains("show")
  ) {
    refContentBox.classList.remove("show");
    feedContentBox.classList.remove("show");

    refCaret.classList.toggle("fa-caret-right");
    refCaret.classList.toggle("fa-caret-down");

    feedCaret.classList.toggle("fa-caret-right");
    feedCaret.classList.toggle("fa-caret-down");
  }

  firstTech.classList.add("firstTech");
});

refDropdown.addEventListener("click", () => {
  refContentBox.classList.toggle("show");
  refCaret.classList.toggle("fa-caret-right");
  refCaret.classList.toggle("fa-caret-down");

  if (
    techContentBox.classList.contains("show") ||
    feedContentBox.classList.contains("show")
  ) {
    techContentBox.classList.remove("show");
    feedContentBox.classList.remove("show");

    techCaret.classList.toggle("fa-caret-right");
    techCaret.classList.toggle("fa-caret-down");

    feedCaret.classList.toggle("fa-caret-right");
    feedCaret.classList.toggle("fa-caret-down");
  }

  firstRef.classList.add("firstRef");
});

feedDropdown.addEventListener("click", () => {
  feedContentBox.classList.toggle("show");
  feedCaret.classList.toggle("fa-caret-right");
  feedCaret.classList.toggle("fa-caret-down");

  if (
    techContentBox.classList.contains("show") ||
    refContentBox.classList.contains("show")
  ) {
    techContentBox.classList.remove("show");
    refContentBox.classList.remove("show");

    techCaret.classList.toggle("fa-caret-right");
    techCaret.classList.toggle("fa-caret-down");

    refCaret.classList.toggle("fa-caret-right");
    refCaret.classList.toggle("fa-caret-down");
  }

  firstFeed.classList.add("firstFeed");
});

firstTech.addEventListener("mouseout", () => {
  firstTech.classList.remove("firstTech");
});

firstRef.addEventListener("mouseout", () => {
  firstRef.classList.remove("firstRef");
});

firstFeed.addEventListener("mouseout", () => {
  firstFeed.classList.remove("firstFeed");
});
