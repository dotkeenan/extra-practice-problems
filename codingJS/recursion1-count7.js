/* description
Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12].

Examples

count7(717) → 2
count7(7) → 1
count7(123) → 0
*/

function count7(n){
  if (Math.floor(n/10) === 0) {
    return n === 7 ? 1 : 0
  }
  return n % 10 === 7 ? 1 + count7(Math.floor(n/10)) : count7(Math.floor(n/10))
}

/*
Keep removing the 1's place from the number.
Check if that removed number is a 7 or not.
If it is a 7, return 1 + the result of the function recursively called with the
1's place removed from 'n'.
If not a 7, just return the function recursively called with the 1's place removed from
'n'
*/
