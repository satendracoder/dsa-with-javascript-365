var twoSum = function(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i];
        if (map[need] !== undefined) {
            return [map[need], i];
        }
        map[nums[i]] = i;
    }
};
