/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l<= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] == target) {
      return mid;
    
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }

  }
  return -1;
    
};

// Example usage:
const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
const result = search(nums, target);
console.log(result); // Output: 4