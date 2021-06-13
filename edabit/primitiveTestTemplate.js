let testCount = 0;
let correctCount = 0;
const test = (val1, val2) => {
  console.log('test:', ++testCount)
  if (val1 === val2) {
    correctCount++
    console.log('correct - ', val1, '===', val2)
  } else {
    console.log('***incorrect*** -', 'Got:', val1, 'Expected:', val2)
  }
}

// Your solution goes here

test(/* function call goes here */, /* Value goes here */)


console.log(correctCount, '/', testCount, 'correct')
/* To test
in cli, run: node myFileName.js
*/
