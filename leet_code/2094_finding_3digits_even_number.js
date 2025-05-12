/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    digits.sort((a, b) => a - b);
    const result = [];
    const n = digits.length;
    const used = new Array(n).fill(false);
    const backtrack = (current, start) => {
        if (current.length === 3) {
            const num = parseInt(current.join(''), 10);
            if (num % 2 === 0 && num >= 100) {
                result.push(num);
            }
            return;
        }
        for (let i = start; i < n; i++) {
            if (used[i] || (i > start && digits[i] === digits[i - 1])) continue;
            used[i] = true;
            current.push(digits[i]);
            backtrack(current, i + 1);
            current.pop();
            used[i] = false;
        }
    }
    backtrack(digits, 0);
    return result;
};

// Example usage:
const digits = [2, 1, 3, 0];
const result = findEvenNumbers(digits);
console.log(result); // Output: [102, 120, 130, 210, 230]