function topKFrequent(nums, k) {
  const freqMap = {};
  const bucket = [];
  const result = [];

  // Step 1: Frequency count
  for (let num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  // Step 2: Bucket sort
  for (let num in freqMap) {
    const freq = freqMap[num];
    if (!bucket[freq]) bucket[freq] = [];
    bucket[freq].push(Number(num));
  }

  // Step 3: Collect top K
  for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
    if (bucket[i]) {
      result.push(...bucket[i]);
    }
  }

  return result.slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3],2))

  