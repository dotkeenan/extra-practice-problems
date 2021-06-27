const sortArray = (arr) => {
  let smallest;
  const res = []

  while (arr.length) {
    smallest = arr[0]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i]
      }
    }
    res.push(smallest)
    arr.splice(arr.indexOf(smallest), 1)
  }
  return res
}
module.exports = sortArray;

/*
make a storage named smallest initialized at arr[0]
make a storage named res intitalized to an empty array.
loop over 'arr'
re-assign smallest if arr[i] is smaller

after one full loop, splice out 'smallest' from arr.
push 'smallest' into 'arr'.
splice out smallest

loop over arr and keep doing the same thing until nothing left
in arr.

*/
