/*  description
The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on. Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.

Examples

fibonacci(0) → 0
fibonacci(1) → 1
fibonacci(2) → 1
*/

function fibonacci(n){
  if (n < 2){
    if (n < 1) {
      return 0
    }
        return 1;
    }else{
        return fibonacci(n-2) + fibonacci(n-1);
  }
}


/* non recursive version:
function fibonacci(n){
  const fibNums = [0,1]
  for (let i = 0; i < n-1; i++) {
    fibNums.push(fibNums[fibNums.length-1] + fibNums[fibNums.length-2])
  }
  return n === 0 ? 0
       : n === 1 ? 1
       : fibNums[n]
}
 */
