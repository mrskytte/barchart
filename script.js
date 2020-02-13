"use strict";

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
  10
];
let randomNumber;

function getRandomNumber() {
  randomNumber = Math.floor(Math.random() * 32) + 1;
}
setInterval(generateQueue, 1000);
function generateQueue() {
  getRandomNumber();
  let newQueueNumber = randomNumber;
  console.log(newQueueNumber);
  queueArray.push(newQueueNumber);
  queueArray.shift();
  changeBars();
}

function changeBars() {
  for (let i = 0; i < 40; i++) {
    const thisBar = document.getElementById(`bar${1 + i}`);
    thisBar.dataset.count = queueArray[i];
    thisBar.style.setProperty("--height", queueArray[i]);
    if (queueArray[i] < 11) {
      thisBar.dataset.color = "low";
    } else if (queueArray[i] < 23) {
      thisBar.dataset.color = "medium";
    } else if (queueArray[i] < 33) {
      thisBar.dataset.color = "high";
    }
  }
}
