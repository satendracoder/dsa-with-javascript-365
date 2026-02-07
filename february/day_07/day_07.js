var maxSubArray = function(nums) {
    let curr = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        curr = Math.max(nums[i], curr + nums[i]);
        max = Math.max(max, curr);
    }
    return max;
};
