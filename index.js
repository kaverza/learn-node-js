const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const [command] = argv._;

const CURRENT = "current";
const ADD = "add";
const SUB = "sub";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

if (command === CURRENT) {
  const currentDate = new Date();

  if (argv.y || argv.year) {
    return console.log(`Current year: ${currentDate.getFullYear()}`);
  }

  if (argv.m || argv.month) {
    return console.log(`Current month: ${monthNames[currentDate.getMonth()]}`);
  }

  if (argv.d || argv.date) {
    return console.log(`Current date: ${currentDate.getDate()}`);
  }

  console.log(currentDate);
}

if (command === ADD) {
  const currentDate = new Date();

  if (argv.y || argv.year) {
    const year = argv.y || argv.year;

    currentDate.setFullYear(currentDate.getFullYear() + year);
    return console.log(`${year} year ahead: ${currentDate}`);
  }

  if (argv.m || argv.month) {
    const month = argv.m || argv.month;

    currentDate.setMonth(currentDate.getMonth() + month);
    return console.log(`${month} month ahead: ${currentDate}`);
  }

  if (argv.d || argv.date) {
    const date = argv.d || argv.date;

    currentDate.setDate(currentDate.getDate() + date);
    return console.log(`${date} date ahead: ${currentDate}`);
  }
}

if (command === SUB) {
  const currentDate = new Date();

  if (argv.y || argv.year) {
    const year = argv.y || argv.year;

    currentDate.setFullYear(currentDate.getFullYear() - year);
    return console.log(`${year} year ago: ${currentDate}`);
  }

  if (argv.m || argv.month) {
    const month = argv.m || argv.month;

    currentDate.setMonth(currentDate.getMonth() - month);
    return console.log(`${month} month ago: ${currentDate}`);
  }

  if (argv.d || argv.date) {
    const date = argv.d || argv.date;

    currentDate.setDate(currentDate.getDate() - date);
    return console.log(`${date} date ago: ${currentDate}`);
  }
}
