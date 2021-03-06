"use strict";

window.addEventListener("DOMContentLoaded", init);

const queueArray = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  1
];

function getRandomNumber() {
  return Math.floor(Math.random() * 32) + 1;
}

function init() {
  generateQueue();
  document
    .querySelector(".bar:first-child")
    .addEventListener("animationiteration", generateQueue);
}

function generateQueue() {
  let newQueueNumber = getRandomNumber();
  console.log(newQueueNumber);
  queueArray.push(newQueueNumber);
  queueArray.shift();
  showBars();
}

function showBars() {
  for (let i = 0; i < 41; i++) {
    const thisBar = document.getElementById(`bar${1 + i}`);
    changeBarsHeight(thisBar, i);
    changeBarsColor(thisBar, i);
    changeBarsHover(thisBar, i);
  }
}

function changeBarsHeight(thisBar, i) {
  thisBar.style.setProperty("--height", queueArray[i]);
}

function changeBarsColor(thisBar, i) {
  if (queueArray[i] < 11) {
    thisBar.dataset.color = "low";
  } else if (queueArray[i] < 23) {
    thisBar.dataset.color = "medium";
  } else if (queueArray[i] < 33) {
    thisBar.dataset.color = "high";
  }
}

function changeBarsHover(thisBar, i) {
  thisBar.dataset.count = queueArray[i];
}
