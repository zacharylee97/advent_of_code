const fs = require('fs');
const text = fs.readFileSync('input.txt','utf8')
const textByLine = text.split('\n');

const coordinates = [];
const overlap = [];
for(let i = 0; i < 1000; i++) {
  coordinates[i] = [];
}
//j=row, k=column
//# of rows = height, # of columns = width
textByLine.forEach(claim => {
  //Format info from claim
  const info = claim.split(' ')
  const ID = info[0];
  const position = info[2].split(',');
  const dimensions = info[3].split('x');

  const inFromLeft = parseInt(position[0]);
  const inFromTop = parseInt(position[1].slice(0, -1));
  const width = parseInt(dimensions[0]);
  const height = parseInt(dimensions[1]);
  for(let j = 0; j < height; j++) {
    for(let k = 0; k < width; k++) {
      if (coordinates[inFromTop + j][inFromLeft + k]) {
        if (overlap.indexOf(coordinates[inFromTop + j][inFromLeft + k]) === -1 && coordinates[inFromTop + j][inFromLeft + k] !== 'X') {
          overlap.push(coordinates[inFromTop + j][inFromLeft + k]);
        }
        if (overlap.indexOf(ID) === -1) {
          overlap.push(ID);
        }
        coordinates[inFromTop + j][inFromLeft + k] = 'X';
      } else {
        coordinates[inFromTop + j][inFromLeft + k] = ID
      }
    }
  }
})

let found = false;
let counter = 1;
while (!found) {
  let match = false;
  for (let x = 0; x < textByLine.length; x++) {
    if (overlap.indexOf(`#${counter}`) === -1) {
      match = true;
      break;
    }
  }
  if (match) {
    found = true;
  } else {
    counter++;
  }
}
console.log(counter);