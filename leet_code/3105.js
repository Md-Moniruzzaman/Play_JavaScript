
/* 
    Longest Stricly increasing or Longest Stricly Decreasing subarray
    You are given an array of integers nums. Return the length of the longest 
    subarray
    of nums which is either 
    strictly increasing
    or 
    strictly decreasing
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

function longestMonotonicSubarray(nums) {
    if (nums.length === 0) return 0;
    let cur_inc = 1;
    let cur_dec = 1;
    let max_len = 1;
    for (let i = 1; i < nums.length; i++){
        if (nums[i] > nums[i - 1]) {
            cur_inc++;
            cur_dec = 1;
        } else if (nums[i] < nums[i - 1]) {
            cur_dec++;
            cur_inc = 1;
        } else {
            cur_inc = 1;
            cur_dec = 1;
        }
        max_len = Math.max(max_len, cur_inc, cur_dec);
    }
    return max_len
    
};

console.log(longestMonotonicSubarray([1,4,3,3,2]))
console.log(longestMonotonicSubarray([1,10,10]))