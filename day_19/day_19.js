var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let count = 0;

    for (let num of nums) {
        if (num === 1) {
            count++;
            max = Math.max(max, count);
        } else {
            count = 0;
        }
    }
    return max;
};
