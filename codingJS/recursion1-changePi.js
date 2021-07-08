/* description
Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".

Examples

changePi('xpix') → x3.14x
changePi('pipi') → 3.143.14
changePi('pip') → 3.14p
*/

function changePi(str){
  if ((/pi/g).test(str) === false) return str;
  return changePi(str.replace('pi', '3.14'))
}
