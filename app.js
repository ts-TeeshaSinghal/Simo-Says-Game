let gameSeq = [];
let userSeq = [];

let btns = ["sky-blue", "brown", "blue", "green"];
let started = false;
let level = 0;
let highestScore = 0;
let h3 = document.querySelector("h3");
document.addEventListener("keypress", () => {
  if (started == false) {
    console.log("game started");
    started = true;
    h3.style.color = "green";
    h3.classList.add("zoom-in");
  }
  levelUp();
});

function flashButton(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  let ranIdx = Math.floor(Math.random() * 3);
  let ranCol = btns[ranIdx];
  let ranBtn = document.querySelector(`.${ranCol}`);
  gameSeq.push(ranCol);
  console.log(gameSeq);
  flashButton(ranBtn);
}

function check(idx) {
  //   console.log(level);

  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if (level > highestScore) {
      highestScore = level;
    }
    h3.innerHTML = `Game over ! you scored ${level}. <em>Highest Score = ${highestScore}</em><br>Now press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    h3.style.color = "red";
    h3.classList.add("zoom-in");

    reset();
  }
}
function btnPress() {
  let btn = this;
  console.log(this);
  flashButton(btn);

  userColor = btn.getAttribute("id");
  //   console.log(userColor);
  userSeq.push(userColor);
  check(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".box");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
