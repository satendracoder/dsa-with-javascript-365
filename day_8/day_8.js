function productExceptSelf(nums) {
         let n = nums.length;
    let answer = new Array(n).fill(1);

    // Left products
    let left = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = left;
        left *= nums[i];
    }

    // Right products
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= right;
        right *= nums[i];
    }

    return answer;
};