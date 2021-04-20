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

/* pseudocode
Iterate over array.
add each number to a new array called 'res'
If iteration is an array, access it's inner value at 0 index, and add that
value to 'res', but also add it to an array named 'arrNums'

sort res
iterate over arrNums
splice the occurace of the current arrNums iteration, in 'res', and replace it with
the same value, but in an array.
*/

/* top solution
this is some weird ass approach that I'm not gonna try to delve into.

function spiralNumbers(n) {
    var matrix = [...Array(n)].map(_ => []),
        x = 0,
        y = 0,
        dir = 2,
        size = n,
        c = 0;
    for (var i = 1; i <= n * n; i++) {
        matrix[y][x] = i;
        if (++c == size) {
            dir = (dir + 1) % 4;
            size -= dir % 2;
            c = 0;
        }
        if (dir % 2 == 0) x += dir > 1 ? 1 : -1;
        else y += dir > 1 ? 1 : -1;
    }
    return matrix;
}
*/
