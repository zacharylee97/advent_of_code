const fs = require('fs');
const text = fs.readFileSync('input.txt','utf8')
const input = text.split('\n');

function difference (str1, str2) {
  let numOfDiff = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      numOfDiff++;
    }
  }
  if (numOfDiff === 1) {
    found = true;
  }
}
let found = false;
for (let i = 0; i < input.length; i++) {
  if (found) {
    break;
  }
  for (let j = i + 1; j < input.length; j++) {
    difference(input[i], input[j]);
    if (found) {
      console.log(input[i], input[j]);
      break;
    }
  }
}
