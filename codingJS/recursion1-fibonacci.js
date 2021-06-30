/*  description
The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on. Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.

Examples

fibonacci(0) → 0
fibonacci(1) → 1
fibonacci(2) → 1
*/

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

// This is for a fibonacci sequence that starts with 0,1, NOT 1,1.
// Lots of examples online only have if(n<2), but that only works for 1,1.
function fibonacci(n){
  if (n <= 0) {
      return 0
    }
  if (n <= 2){
      return 1;
    }else{
      return fibonacci(n-2) + fibonacci(n-1);
  }
}
console.log(fibonacci(5))

/* Visualization of the recursion:
conditions: if n<= 0, return 0; if n <= 2, return 1.
These conditions are what makes it so the recursion process can end.

fib(5) {
  return fib(4) + fib(3);
    fib(4) {
      return fib(3) + fib(2);
        fib(3) {
          return fib(2) + fib(1);
            fib(2) {
              return 1;
            }
            fib(1) {
              return 1;
            }
          return 2 // fib(2) + fib(1) === 2;
        }
        fib(2) {
          return 1;
        }
      return 3 // (2 + 1) or fib(3) + fib(2)
    }
    fib(3) {
      return fib(2) + fib(1)
        fib(2) {
          return 1;
        }
        fib(1) {
          return 1;
        }
      return 2 // 1 + 1 or fib(2) + fib(1)
    }
  return 5 // 3 + 2 or fib(4) + fib(3)
}


*/
