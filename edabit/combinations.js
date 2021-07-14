/* description
Combinations
Create a function that takes a variable number of arguments, each argument representing the number of items in a group, and returns the number of permutations (combinations) of items that you could get by taking one item from each group.

Examples
combinations(2, 3) ➞ 6

combinations(3, 7, 4) ➞ 84

combinations(2, 3, 4, 5) ➞ 120
Notes
Don't overthink this one.
Input may include the number zero.
*/

const combinations = (...args) => {
  const argsArr = args.filter(x => x !== 0)

  return argsArr.reduce((acc, cur) => acc * cur)
}

module.exports = combinations;

/*
use the rest parameter (es6) for the 'combinations' function
turn the arguments into an array.  In my case, I also wanted to get rid of zeros,
so I used filter().

I returned the result of reducing the new argsArr array by multiplying the accumulator
by the current.

If the array only has 1 number, it smartly just returns that 1 number, instead of trying to
do something like argsArr[0] * undefined === undefined/NaN
*/
