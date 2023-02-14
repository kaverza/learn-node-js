const http = require('http');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { API_KEY, API_URL, DEFAULT_CITY } = require('./config');
const argv = yargs( hideBin(process.argv) ).argv;

const city = argv.city || DEFAULT_CITY;
const url = `${API_URL}?access_key=${API_KEY}&query=${city}`;

http.get(url, (res) => {
    const { statusCode } = res;

    if (statusCode !== 200) {
        return console.log(`statusCode: ${statusCode}`)
    }

    res.setEncoding('utf-8');
    let rowData = '';

    res.on('data', (chank) => rowData += chank)
        .on('end', () => {
            const parsData = JSON.parse(rowData);
            const { location, current } = parsData;
            console.log(`${location.country} ${location.name}: ${current.temperature}°C`);
        })
}).on('error', (err) => console.error(err))