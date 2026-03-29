var characterReplacement = function(s, k) {
  let count = {};
  let left = 0;
  let maxFreq = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    count[char] = (count[char] || 0) + 1;

    maxFreq = Math.max(maxFreq, count[char]);

    while ((right - left + 1) - maxFreq > k) {
      count[s[left]]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
