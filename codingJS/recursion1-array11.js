/*
Given an array of ints, compute recursively the number of times that the value 11 appears in the array. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.

Examples

array11([1, 2, 11], 0) → 1
array11([11, 11], 0) → 2
array11([1, 2, 3, 4], 0) → 0
*/

function array11(nums, i){
  if (nums[i] === undefined) return 0;
  if (nums[i] === 11) {
    return 1 + array11(nums, i+1)
  } else {
    return array11(nums, i+1)
  }
}

/*
recursion ending condition: if there are no more array elements, then return 0;
if the current iterations array element is 11, then return '1' and
the the result of the recursively called function with 'i' incremented by 1.

if it's not 11, then just return the result of the recursively called function,
with 'i' incremented by 1.
*/
