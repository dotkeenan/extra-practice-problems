/* const sortIt = (arr) => {
  // apparently just sorting an array with nested arrays with 1 numeric value
  // works just as if there were no nested arrays...
  return arr.sort((a,b) => a-b)
} */
const sortIt = (arr) => {
  const res = []
  const arrNums = []

  arr.forEach(x => {
    if (typeof x !== 'number') {
      arrNums.push(x[0])
      res.push(x[0])
    } else {
      res.push(x)
    }
  })

  res.sort((a,b) => a - b)

  arrNums.forEach(x => {
    res.splice(res.indexOf(x), 1, [x])
  })

  return res;
}

module.exports = sortIt;

/*
Iterate over array.
add each number to a new array called 'res'
If iteration is an array, access it's inner value at 0 index, and add that
value to 'res', but also add it to an array named 'arrNums'

sort res
iterate over arrNums
splice the occurace of the current arrNums iteration, in 'res', and replace it with
the same value, but in an array.


*/
