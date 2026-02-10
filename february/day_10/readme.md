# Day_10 – Rotate Array

Given an array, rotate the array to the right by k steps.

## Example
Input: nums = [1,2,3,4,5,6,7], k = 3  
Output: [5,6,7,1,2,3,4]

## Approach
- Reduce k using modulo (k % n)
- Reverse the entire array
- Reverse first k elements
- Reverse remaining elements

## Complexity
Time Complexity: O(n)  
Space Complexity: O(1)

## LeetCode
Rotate Array (Medium)
