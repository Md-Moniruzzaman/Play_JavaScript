/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    digits.sort((a, b) => a - b);
    let result = new Set();
    const n = digits.length;
    for (let i = 0; i < n; i++) {
        if (digits[i] === 0) continue; // Skip leading zero
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            for (let k = 0; k < n; k++) {
                if (i === k || j === k) continue;
                if (digits[k] % 2 === 0) { // Check if the last digit is even
                    result.add(digits[i] * 100 + digits[j] * 10 + digits[k]);
                }
            }
        }
    }
    // result = [...new Set(result)]; // Remove duplicates
    // result.sort((a, b) => a - b); // Sort the result

   
    // let bucket = new Array(10).fill(0);
    // let res = [];
    // for (let i=0; i<digits.length; i++) {
    //     bucket[digits[i]]++;
    // }

    // for (let i=100; i<=999; i+=2) {
    //     const hundred = Math.floor(i / 100);
    //     const tens = Math.floor((i % 100) / 10);
    //     const ones = i % 10;
    //     let include = true;
    //     if (--bucket[hundred] < 0) include = false;
    //     if (--bucket[tens] < 0) include = false;
    //     if (--bucket[ones] < 0) include = false;
    //     if (include) res.push(i);
    //     bucket[hundred]++; bucket[tens]++; bucket[ones]++;
    // }
       

    return [...result];
};

// Example usage:
const digits = [2,2,8,8,2];
const result = findEvenNumbers(digits);
console.log(result); // Output: [102, 120, 130, 210, 230]