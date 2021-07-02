/*
Given a non-negative int n, compute recursively (no loops) the count of the occurrences of 8 as a digit, except that an 8 with another 8 immediately to its left counts double, so 8818 yields 4. Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12].

Examples

count8(8) → 1
count8(818) → 2
count8(8818) → 4
*/
function count8(n){
  if (Math.floor(n/10) === 0) {
    return n === 8 ? 1 : 0
  }
  if (n % 10 === 8) {
    if (n % 100 === 88) {
      return 2 + count8(Math.floor(n/10))
    }
    return 1 + count8(Math.floor(n/10))
  } else {
      return count8(Math.floor(n/10))
  }
}

/*
create the ending condition for the recursion:
if when attempting to cut off the the 1's place digit, but is unable to (because
it is already a single digit number), return 1 if the number is 8, or 0 if it's 1.

create a conditional to check if the 1's place digit is an 8 or not:

If it is, use another conditional to check whether the 10's place digit is also
an 8 or not:

If that nested conditional is true, then return 2 + result of the recursively run function
called with the number with the 1's place digit removed.

if the above nested conditional does not get triggered, the first conditional should
return 1 + the result of the recursive function called with the number with the 1's place
removed.

If the first condition doesn't pass (the ones place digit is not an 8)
then just return the function recursively called with the number with the 1's place removed.

*/
