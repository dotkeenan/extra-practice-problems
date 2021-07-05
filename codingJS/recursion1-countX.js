/*
Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.

Examples

countX('xxhixx') → 4
countX('xhixhix') → 3
countX('hi') → 0
*/
function countX(str){
  if(str.length === 0) return 0;
  if (str[str.length-1] === 'x') {
    return 1 + countX(str.slice(0, str.length-1))
  } else {
    return countX(str.slice(0, str.length-1))
  }
}
