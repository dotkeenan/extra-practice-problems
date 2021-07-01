/*
Given a non-negative int n, return the sum of its digits recursively (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12].

Examples

sumDigits1(126) → 9
sumDigits1(49) → 13
sumDigits1(12) → 3
*/
function sumDigits1(n){
  if (Math.floor(n/10) === 0) return n
  return n%10 + sumDigits1(Math.floor(n/10))
}
/*
n % 10 returns the 1's place of the number
Math.floor(n/10) removes the 1's place of the number

To get a sum of the digits, I want to keep taking the 1's place of the number, then
'delete' that 1's place digit, and add it to the result of the new number's 1's place digit

To end the recursion, if when trying remove the 1's place of the digit returns 0,
then just return that last digit, since all that is left is a single digit number.

*/
