var longestMonotonicSubarray = function(nums) {
    let inc = 1, dec = 1, ans = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            inc += 1;
            dec = 1;
        } else if (nums[i] < nums[i - 1]) {
            dec += 1;
            inc = 1;
        } else {
            inc = 1;
            dec = 1;
        }
        ans = Math.max(ans, inc, dec);
    }
    return ans;
};
