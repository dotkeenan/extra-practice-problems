/*
Return the number of times that the string "hi" appears anywhere in the given string.

Examples

countHi('abc hi ho') → 1
countHi('ABChi hi') → 2
countHi('hihi') → 2
*/

function countHi(str) {
  if (str.length === 0) return 0
  if (str[str.length - 1] === 'i'
    & str[str.length - 2] === 'h') {
    return 1 + countHi(str.slice(0, str.length - 1))
  } else {
    return countHi(str.slice(0, str.length - 1))
  }
}
console.log(countHi('abc hi ho'))

/*
recrusion ending condition: if str has no more length, return 0;

to count how many times 'hi' appears in the string

create conditional that checks if the last and second to last
element in str are 'h' and 'i'.
-If true, then return 1 + the function recursively called with the str with the last
letter removed.

if the above condition is not met, then return the same recursively called function
and argument, but do not add '1'.

*/
