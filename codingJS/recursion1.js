function factorial(n){
  if (n === 1) return 1;
  return n * factorial(n-1)
}
console.log(factorial(6))

/*
The follow shows for each 'n' what the return is
6: 6 * factorial(5) // 6 * 120
5: 5 * factorial(4) // 5 * 24
4: 4 * factorial(3) // 4 * 6
3: 3 * factorial(2) // 3 * 2
2: 2 * factorial(1) // 2 * 1
1: n === 1 so return 1 from factorial(1)

So finally after reaching the bottom/end of the recursion,
we can back up through the steps above and replace factorial(n) with
the evaluated result:
1: 1
2: 2 * 1 // 2 (2 * factorial(1) refactors to 2 * 1 which equals 2)
3: 3 * 2 // 6 (since 3 * factorial(2) === 6)
4: 4 * 6 // 24
5: 5 * 24 // 120
6: 6 * 120 // 720

So starting at the first run, it basically keeps going one level deeper
in recursive state.  ( like going down levels in a inception dream)

Once it reaches the bottom, and it stops calling the recursive function,
it can start returning evaluated values and travel back up
through the recursive levels.

In this case, finally when factorial(5) returns a number,
then we can get the answer of 6 * factorial(5) in the very first function call.
*/
