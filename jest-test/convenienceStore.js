function changeEnough(change, amountDue) {
  const summedChange = (change[0] * .25) + (change[1] * .1) + (change[2] * .05) + (change[3] * .01);
  return summedChange >= amountDue ? true : false;
}

module.exports = changeEnough;

// console command to test code.
// npm test -- convenienceStore.test.js
