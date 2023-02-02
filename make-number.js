const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const number = getRandomInt(0, 100);

console.log("Загадано число в диапазоне от 0 до 100");

rl.on("line", (input) => {
  if (Number(input) === number) {
    console.log("Отгадано число");
    return rl.close();
  }

  if (number > Number(input)) {
    console.log("Больше");
  } else {
    console.log("Меньше");
  }
});
