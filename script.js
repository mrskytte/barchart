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
let counter = 0;

function getRandomNumber() {
  randomNumber = Math.floor(Math.random() * 32) + 1;
}
init();
function init() {
  for (let i = 0; i < 40; i++) {
    getRandomNumber();
    let newQueueNumber = randomNumber;
    queueArray.push(newQueueNumber);
    queueArray.shift();
    const thisBar = document.querySelector(`.bar:nth-child(${1 + i})`);
    thisBar.dataset.count = queueArray[i];
    thisBar.style.setProperty("--delay", thisBar.dataset.delay);
  }
  let time = 0;
  setInterval(watch, 1000);
  function watch() {
    time = time + 1;
    console.log(`stop watch ${time}`);
  }
}
setTimeout(startChart, 40000);

function startChart() {
  console.log("Start queue");
  setInterval(generateQueue, 1000);
}

function generateQueue() {
  getRandomNumber();
  let newQueueNumber = randomNumber;
  console.log(newQueueNumber);
  queueArray.push(newQueueNumber);
  queueArray.shift();
  changeBars();
}

function changeBars() {
  let thisBar = document.querySelector(`.bar:nth-child(${counter + 1})`);
  console.log(counter);
  thisBar.dataset.count = queueArray[counter];
  thisBar.style.setProperty("--height", queueArray[counter]);
  if (queueArray[counter] < 11) {
    thisBar.dataset.color = "low";
  } else if (queueArray[counter] < 23) {
    thisBar.dataset.color = "medium";
  } else if (queueArray[counter] < 33) {
    thisBar.dataset.color = "high";
  }
  if (counter < 39) {
    console.log("hello");
    counter++;
  } else if ((counter = 40)) {
    console.log("too high");
    counter = 0;
  }
}
