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

/*
create recursion ending condition:
test if 'str' contains an 'x'.  If it does, return 'str'.

replace() replaces the first found occurance of a string, so basically keep
replacing until there is nothing else to replace (which the first conditional checks for)

return the function called recursively with the result of 'str' where
'x' is replaced with 'y'.
*/
