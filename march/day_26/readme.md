# Day 26_March – Minimum Size Subarray Sum

Given an array of positive integers nums and a target integer target,
return the minimal length of a subarray whose sum is greater than or equal to target.

If there is no such subarray, return 0.

## Example

Input: target = 7, nums = [2,3,1,2,4,3]  
Output: 2  
Explanation: Subarray [4,3] has the minimal length

Input: target = 4, nums = [1,4,4]  
Output: 1  

Input: target = 11, nums = [1,1,1,1,1,1,1,1]  
Output: 0  

## Approach

- Use Sliding Window
- Expand right pointer to increase sum
- When sum ≥ target:
  - Update minimum length
  - Shrink window from left
- Repeat process

## Complexity

Time Complexity: O(n)  
Space Complexity: O(1)

## LeetCode
Minimum Size Subarray Sum (Medium)
