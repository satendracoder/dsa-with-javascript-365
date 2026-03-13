var nextGreaterElement = function(nums1, nums2) {
  let stack = [];
  let map = new Map();

  for (let num of nums2) {
    while (stack.length && num > stack[stack.length - 1]) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }

  return nums1.map(num => map.get(num) || -1);
};
