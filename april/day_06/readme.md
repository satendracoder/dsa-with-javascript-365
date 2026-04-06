# Day 06_April – Binary Search

Given a sorted array of integers nums and an integer target,
return the index of target if it exists, otherwise return -1.

You must write an algorithm with O(log n) runtime complexity.

## Example

Input: nums = [-1,0,3,5,9,12], target = 9  
Output: 4  

Input: nums = [-1,0,3,5,9,12], target = 2  
Output: -1  

## Approach

- Use Binary Search
- Initialize left = 0, right = nums.length - 1
- Find mid index
- Compare nums[mid] with target:
  - If equal → return mid
  - If smaller → search right half
  - If larger → search left half
- Repeat until found or range ends

## Complexity

Time Complexity: O(log n)  
Space Complexity: O(1)

## LeetCode
Binary Search (Easy)
