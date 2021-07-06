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
