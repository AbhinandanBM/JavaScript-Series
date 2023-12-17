const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());
let intervalId;

const startchangeColor = function () {
  const changeColor = function () {
    document.body.style.backgroundColor = randomColor();
  };

  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
  }
};

const stopchangeColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.getElementById("start").addEventListener("click", startchangeColor);

document.getElementById("stop").addEventListener("click", stopchangeColor);
