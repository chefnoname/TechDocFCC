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

// DROP DOWN MENUS

techDropdown.addEventListener("click", () => {
  techContentBox.classList.toggle("show");
  techCaret.classList.toggle("fa-caret-right");
  techCaret.classList.toggle("fa-caret-down");

  if (refContentBox.classList.contains("show")) {
    refContentBox.classList.remove("show");

    refCaret.classList.toggle("fa-caret-right");
    refCaret.classList.toggle("fa-caret-down");
  }

  if (feedContentBox.classList.contains("show")) {
    feedContentBox.classList.remove("show");

    feedCaret.classList.toggle("fa-caret-right");
    feedCaret.classList.toggle("fa-caret-down");
  }

  firstTech.classList.add("firstTech");
});

refDropdown.addEventListener("click", () => {
  refContentBox.classList.toggle("show");
  refCaret.classList.toggle("fa-caret-right");
  refCaret.classList.toggle("fa-caret-down");

  if (techContentBox.classList.contains("show")) {
    techContentBox.classList.remove("show");

    techCaret.classList.toggle("fa-caret-right");
    techCaret.classList.toggle("fa-caret-down");
  }

  if (feedContentBox.classList.contains("show")) {
    feedContentBox.classList.remove("show");

    feedCaret.classList.toggle("fa-caret-right");
    feedCaret.classList.toggle("fa-caret-down");
  }

  firstRef.classList.add("firstRef");
});

feedDropdown.addEventListener("click", () => {
  feedContentBox.classList.toggle("show");
  feedCaret.classList.toggle("fa-caret-right");
  feedCaret.classList.toggle("fa-caret-down");

  if (techContentBox.classList.contains("show")) {
    techContentBox.classList.remove("show");

    techCaret.classList.toggle("fa-caret-right");
    techCaret.classList.toggle("fa-caret-down");
  }

  if (refContentBox.classList.contains("show")) {
    refContentBox.classList.remove("show");

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

// CODE EXAMPLE

const codeMirrorEditor = document.querySelector(".codeMirrorTextarea");

let editor = CodeMirror(codeMirrorEditor, {
  value:
    "const animals = ['pigs', 'goats', 'sheep'];\n\nconst count = animals.push('cows');\nconsole.log(count);\n// expected output: 4\nconsole.log(animals)\n// expected output: Array ['pigs', 'goats', 'sheep', 'cows']\n\nanimals.push('chickens', 'cats', 'dogs')\nconsole.log(animals);\n// expected output: Array ['pigs', 'goats', 'sheep', 'cows', 'cats', 'dogs']\n",
  mode: "javascript",
  theme: "mdn-like",
  lineNumbers: true,
});

// COPY TO CLIPBOARD FUNCTION
const codeExample = document.querySelector(".syntaxCode");
const clipboard = document.querySelector(".clipboard");
const textBubble = document.querySelector(".textBubble");

clipboard.addEventListener("click", () => {
  navigator.clipboard
    .writeText(codeExample.innerText)
    .then(() => {
      textBubble.style.display = "block";
      setTimeout(() => {
        textBubble.style.display = "none";
      }, 1000);
    })
    .catch(() => {
      Alert("Failed ");
    });
});

console.log(codeExample.innerText);
