# Day-005: Top K Frequent Elements (LeetCode #347)

## 📌 Problem Statement
Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.

---

## 🧪 Example

Input:
nums = [1,1,1,2,2,3]
k = 2

Output:
[1,2]

---

## 🧠 Approach (Bucket Sort)

### Algorithm:
1. Count frequency of each number
2. Create buckets where index represents frequency
3. Place numbers in corresponding buckets
4. Traverse buckets from high to low to get top k elements

---

## 💻 JavaScript Solution

```js
var topKFrequent = function(nums, k) {
    const freqMap = {};
    const bucket = [];
    const result = [];

    for (let num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    for (let num in freqMap) {
        const freq = freqMap[num];
        if (!bucket[freq]) bucket[freq] = [];
        bucket[freq].push(Number(num));
    }

    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        if (bucket[i]) result.push(...bucket[i]);
    }

    return result.slice(0, k);
};
