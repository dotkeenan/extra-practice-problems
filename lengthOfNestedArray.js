const getLength = (arr) => {
  // console.log('Start of:', arr) // to test to see the flattening of the nested arrays
  const checkForArr = (arrToCheck) => {
    return arrToCheck.some(x => Array.isArray(x) === true) ? true : false;
  }
  while (checkForArr(arr)) {
    // solution 1
    arr = [].concat(...arr)

    //solution 2
    // arr = arr.reduce((acc, val) => acc.concat(val), [])

    // solution 3 this is only supported in a few browsers, but is the same thing as above.
    // arr = arr.flat()

    // My original solution:
    /* arr.forEach(x => {
      if (Array.isArray(x)) {
        arr.splice(arr.indexOf(x), 1)
        arr = arr.concat(x)
        // console.log(arr) // to test to see the flattening of the nested arrays
      }
    }) */
  }
  return arr.length
}
module.exports = getLength;

/*
arr = [ 2, [ 3, [ 4, [Array] ] ], [ 9 ] ]
arr = [].concat(...[ 2, [ 3, [ 4, [Array] ] ], [ 9 ] ]) //

*/
