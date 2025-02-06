function tupleSameProduct(nums) {
    let produc_count = new Map();
    const n = nums.length;
    for (let i=0; i < n; i++){
        for (let j = i + 1; j < n; j++){
            let product = nums[i] * nums[j];
            produc_count.set(product, (produc_count.get(product) || 0) + 1);
        }
    }

    total_count = 0;
    for (const count of produc_count.values()) {
        if (count >= 2) {
            total_count += count * (count - 1) * 4 
        }
    }

    return total_count;
}


console.log(tupleSameProduct([1,2,4,5,10]))
console.log(tupleSameProduct([2,4,5,10,23,16]))
console.log(tupleSameProduct([2,4,5,10,23,16,20,50,90]))
console.log(tupleSameProduct([200,444,555,666,777,888,999,1000]))
console.log(tupleSameProduct([2,4,5,10]))