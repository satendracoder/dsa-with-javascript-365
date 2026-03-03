# Day 03_March – Subarray Sum Equals K

Given an array of integers nums and an integer k,
return the total number of continuous subarrays
whose sum equals to k.

## Example

Input: nums = [1,1,1], k = 2  
Output: 2

Input: nums = [1,2,3], k = 3  
Output: 2

## Approach

- Use Prefix Sum + Hash Map
- Maintain running sum
- If (currentSum - k) exists in map:
    - Add its frequency to result
- Store frequency of currentSum in map
- Initialize map with {0: 1}

Why?
Because if currentSum - k appeared before,
then subarray between them sums to k.

## Complexity

Time Complexity: O(n)  
Space Complexity: O(n)

## LeetCode
Subarray Sum Equals K (Medium)
