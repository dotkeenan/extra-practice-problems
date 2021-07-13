/* description
To further increase the statistical knowledge of your fight, count the number of times a certain adjective was used.

Given an object that contains several adjectives as values, return a new object where you count the ocurrences of each adjective.

Examples
countNumberOfOccurrences({
  a: "moron",
  b: "scumbag",
  c: "moron",
  d: "idiot",
  e: "idiot"
}) ➞ { moron: 2, scumbag: 1, idiot: 2 }


countNumberOfOccurrences({
  a: "moron",
  b: "moron",
  c:"moron"
}) ➞ { moron: 3 }


countNumberOfOccurrences({
  a: "idiot",
  b: "scumbag"
}) ➞ { idiot: 1, scumbag: 1 }
*/

const numberOfOccurrences = (obj) => {
  const res = {};
  for (const key in obj) {
    if (!(obj[key] in res)) {
      res[obj[key]] = 1;
    } else {
      res[obj[key]]++
    }
  };
  return res;
}

module.exports = numberOfOccurrences;

/*
create an empty object named 'res'
loop over the object with a for...in loop

If res doesn't contain the the current iterations value,
add the current iteration as a key, and the number 1, as a value, to 'res'.

note: the argument object has alphabet as keys, and the values are the
words I want to count.  I don't care about 'obj's keys.  Only the values,
so in the for..in loop, access the values with obj[key]


If res DOES contain the current iteration's property already,
increment that value in 'res'.

return res.

*/
