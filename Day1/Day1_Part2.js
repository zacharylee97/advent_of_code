const fs = require('fs');
const text = fs.readFileSync('input.txt','utf8')
const textByLine = text.split('\n');

function checkFrequencies(result, frequencies) {
  if (frequencies.indexOf(result) > -1) {
    match = true
  }
}

let result = 0;
let frequencies = [0];
let match = false;
let counter = 0;

while (!match) {
  if (counter >= textByLine.length) {
    counter = 0;
  }
  result += parseInt(textByLine[counter]);
  checkFrequencies(result, frequencies);
  frequencies.push(result);
  counter++;
}
console.log(result);