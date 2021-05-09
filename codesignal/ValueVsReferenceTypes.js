const checkEquals = (arr1, arr2) => {
    // for (let i = 0; i < arr1.length; i++) {
    //   if (arr1[i] != arr2[i]) return false
    // }
    // return true;
  return arr1.toString() === arr2.toString();
}

module.exports = checkEquals;
