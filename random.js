const { random } = require('lodash');
const { blue, bold, red } = require('chalk');

const randNum = random(10, 100);

console.log(blue("Random number is "), bold(red(randNum)));