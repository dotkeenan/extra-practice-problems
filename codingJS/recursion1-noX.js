/* description
Given a string, compute recursively a new string where all the 'x' chars have been removed.

Examples

noX('xaxb') → ab
noX('abc') → abc
noX('xx') →
*/
function noX(str){
  if ((/x/).test(str) === false) return str;
  return noX(str.replace('x', ''))
}
