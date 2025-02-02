//  * Special Array 1 
/* 
    An array is considered special if every pair of its adjacent elements contains two numbers with different parity.

    You are given an array of integers nums. Return true if nums is a special array, otherwise, return false.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function checkParity(nums) {
    if(nums.length === 1) return true;
    for(let i = 0; i<nums.length-1; i++){
        if(nums[i]%2 === nums[i+1]%2){
            return false;
        }
        
    }
    return true;
};

// Test cases
console.log(checkParity([2, 1, 4])); // true
console.log(checkParity([1, 3, 5])); // false
console.log(checkParity([2, 4, 6])); // false
console.log(checkParity([1, 2, 3, 4])); // false
console.log(checkParity([1])); // true