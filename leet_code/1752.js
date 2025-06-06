/*
    *Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

    *There may be duplicates in the original array.

   * Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.
*/

function check(nums) {
    let count = 0;
    let n = nums.length;
    for (let i = 0; i <= n; i++) {
        
        if (nums[i] > nums[(i + 1) % n]) {
            
            count ++;
        }
    }
    return count <= 1;
}
   

console.log(check([2,1,3,4]));