const getLength = (arr) => {
  // console.log('Start of:', arr) // to test to see the flattening of the nested arrays
  const checkForArr = (arrToCheck) => {
    return arrToCheck.some(x => Array.isArray(x) === true) ? true : false;
  }
  while (checkForArr(arr)) {
    arr.forEach(x => {
      if (Array.isArray(x)) {
        arr.splice(arr.indexOf(x), 1)
        arr = arr.concat(x)
        // console.log(arr) // to test to see the flattening of the nested arrays
      }
    })
  }
  return arr.length
}
module.exports = getLength;
