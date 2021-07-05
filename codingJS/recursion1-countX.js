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
/*
Create the recursion-ending condition where if the string length is 0, return 0.

create a conditional where if the last letter in the string is an 'x',
then return 1 + the function run recursively with the 'str' with the last letter
taken off.

if the last letter is NOT an 'x', then return recursively called function with
'str' with the last letter removed.
*/
