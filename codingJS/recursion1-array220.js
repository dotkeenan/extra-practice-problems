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

/* explanation
The function relies on checking the follow iteration.  So if the follow iteration
does not exist, then that means it made it through the entire array without
finding a case where there was number that was followed by the same number multiplied by 10
So if it makes it to the end of the array, return false;

If it EVER finds a case where the following number is the previous number * 10, return true

if neither get satisfied, call the function recursively with incrementing i, in order
to traverse the array.
*/
