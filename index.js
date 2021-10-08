"use strict";

const startBtnRef = document.querySelector("[data-action='start']");
const stopBtnRef = document.querySelector("[data-action='stop']");
const bodyRef = document.querySelector("body");

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const toggle = {
  isActive: false,
  start() {
      if (this.isActive) {
          return;
    }

    this.isActive = true;
    this.switchColors = setInterval(() => {
      const min = 0;
      const max = colors.length - 1;
      let i = randomIntegerFromInterval(min, max);

      bodyRef.style.backgroundColor = colors[i];
    }, 1000);
  },

  stop() {
    clearInterval(this.switchColors);
    this.isActive = false;
  },
};

startBtnRef.addEventListener("click", toggle.start.bind(toggle));
stopBtnRef.addEventListener("click", toggle.stop.bind(toggle));
