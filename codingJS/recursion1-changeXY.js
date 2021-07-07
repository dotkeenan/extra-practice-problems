/* description
Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.

Examples

changeXY('codex') → codey
changeXY('xxhixx') → yyhiyy
changeXY('xhixhix') → yhiyhiy
*/
function changeXY(str){
  if ((/x/g).test(str) === false) return str;
  return changeXY(str.replace('x','y'))
}
