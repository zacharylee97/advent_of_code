const fs = require('fs');
const text = fs.readFileSync('input.txt','utf8')
const textByLine = text.split('\n');

let duplicates = 0;
let triplicates = 0;

textByLine.forEach(id => {
  const letters = id.split('');
  const letterCount = {};
  let dup = false;
  let trip = false;
  letters.forEach(letter => {
    let keys = Object.keys(letterCount);
    if (keys.indexOf(letter) > -1) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  })
  for (let letter in letterCount) {
    if (letterCount[letter] === 2) {
      dup = true;
    } else if (letterCount[letter] === 3) {
      trip = true;
    }
  }
  if (dup) {
    duplicates++;
  }
  if (trip) {
    triplicates++;
  }
})
console.log(duplicates * triplicates);
