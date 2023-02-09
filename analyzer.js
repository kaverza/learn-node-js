const fs = require('fs');
const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const fileName = argv.fileName;
const VICTORY_MESSAGE = 'победа';
const LOSS_MESSAGE = 'проигрыш';

if (!fileName) {
    console.log('введите имя файла через флаг --fileName [file]');
}

fs.readFile( path.join(__dirname, fileName), { encoding: 'utf-8' }, (err, data) => {
    if (err) throw Error(err);

    const logs = data.split('\n').filter(item => Boolean(item)).map(item => JSON.parse(item));
    const statistics = {
        partiesCount: logs.length,
        victoryCount: 0,
        lossCount: 0,
        get percentageRatio() {
            const victory = Math.floor((this.victoryCount /  this.lossCount) * 100);

            return `${victory}% / ${100 - victory}%`;
        }
    }

    for (const game of logs) {
        if (game.result === VICTORY_MESSAGE) {
            statistics.victoryCount++;
            continue;
        }

        statistics.lossCount++;
    }

    console.log(`Общее количество партий: ${statistics.partiesCount}, побед: ${statistics.victoryCount}, поражений: ${statistics.lossCount} | ${statistics.percentageRatio}`);

} )