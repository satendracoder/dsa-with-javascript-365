var firstUniqChar = function(s) {
  let count = {};

  // Count frequency
  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  // Find first unique character
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};
