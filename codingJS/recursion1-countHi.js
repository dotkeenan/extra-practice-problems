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
