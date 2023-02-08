const fs = require('fs');
const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({ input, output });
const fileName = argv.fileName || 'log.txt';

const VICTORY_MESSAGE = 'победа';
const LOSS_MESSAGE = 'проигрыш';

function randomInteger(min, max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

const number = randomInteger(1, 2);

console.log('Загадано число в диапазоне от 1 до 2');

rl.on('line', (input) => {
    const content = {
        date: new Date(),
        number,
        input,
        result: null
    };

    if (Number(input) === number) {
        content.result = VICTORY_MESSAGE;
        console.log(VICTORY_MESSAGE);
    } else {
        content.result = LOSS_MESSAGE;
        console.log(LOSS_MESSAGE);
    }

    fs.appendFile(path.join(__dirname, fileName), `${JSON.stringify(content)}\n`, (err) => {
        if (err) throw err;
        rl.close();
    });
});
