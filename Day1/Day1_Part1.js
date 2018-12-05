const fs = require('fs');
const text = fs.readFileSync('input.txt','utf8')
const textByLine = text.split('\n');

let result = 0;
textByLine.forEach(num => {
  result += parseInt(num);
})
console.log(result);