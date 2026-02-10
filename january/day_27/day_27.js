var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const map = {};

    for (let num of nums2) {
        while (stack.length && stack[stack.length - 1] < num) {
            map[stack.pop()] = num;
        }
        stack.push(num);
    }

    return nums1.map(num => map[num] ?? -1);
};
