function longestConsecutive(nums) {
  let set = new Set(nums);
  let longest = 0;

  for (let num of set) {
    if (!set.has(num-1)) {
      let currentNum = num;
      let count = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        count++
      }
      longest = Math.max(longest, count);
    
    }
  }
  return longest;

}
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));