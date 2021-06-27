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
make a storage named smallest.
make a storage named res intitalized to an empty array.

create a loop that runs as long as there are items in 'arr':
assign arr[0] to 'smallest'

loop over 'arr':
re-assign smallest if arr[i] is smaller than 'smallest'

after one full loop over 'arr':
push 'smallest' into 'res', in order to create an ascending order.
splice out smallest from 'arr' using indexOf()

the while loop will eventually stop once 'arr' has no more elements
inside of it.

return 'res'.

*/
