# Day 15_feb – Find All Numbers Disappeared in an Array

Given an array nums of length n where nums[i] is in the range [1, n],
some elements appear twice and others appear once.

Return all the numbers in the range [1, n] that do not appear in nums.

## Example

Input: nums = [4,3,2,7,8,2,3,1]  
Output: [5,6]

Input: nums = [1,1]  
Output: [2]

## Approach

- Numbers are in range [1, n]
- Use index marking technique
- For each number:
  - Mark its corresponding index as negative
- After marking:
  - The indices with positive values represent missing numbers

Why this works?
Because each number maps to an index (num - 1).

## Complexity

Time Complexity: O(n)  
Space Complexity: O(1) (excluding output array)

## LeetCode
Find All Numbers Disappeared in an Array (Easy)
