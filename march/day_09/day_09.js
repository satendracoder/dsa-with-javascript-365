var topKFrequent = function(nums, k) {
  const freqMap = new Map();

  // Count frequencies
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Convert map to array and sort by frequency
  const sorted = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);

  // Extract top k elements
  return sorted.slice(0, k).map(item => item[0]);
};
