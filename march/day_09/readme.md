# Day 09_March – Top K Frequent Elements

Given an integer array nums and an integer k,
return the k most frequent elements.

You may return the answer in any order.

## Example

Input: nums = [1,1,1,2,2,3], k = 2  
Output: [1,2]

Input: nums = [1], k = 1  
Output: [1]

## Approach

1. Count frequency of each number using a Hash Map
2. Sort elements based on frequency (descending)
3. Return first k elements

Alternative optimal solution: Bucket Sort or Min Heap.

## Complexity

Time Complexity: O(n log n)  
Space Complexity: O(n)

## LeetCode
Top K Frequent Elements (Medium)
