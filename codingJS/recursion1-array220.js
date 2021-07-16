/* description
Given an array of ints, compute recursively if the array contains somewhere a value followed in the array by that value times 10. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.

Examples

array220([1, 2, 20], 0) → true
array220([3, 30], 0) → true
array220([3], 0) → false
*/
function array220(nums, i){
  if (nums[i+1] === undefined) return false;
  if (nums[i+1] === nums[i] * 10) return true
  return array220(nums, i+1)
}
