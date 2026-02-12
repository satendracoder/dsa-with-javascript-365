# Day 12_Feb – Missing Number

Given an array containing n distinct numbers in the range [0, n],
return the only number that is missing from the array.

## Example

Input: nums = [3,0,1]  
Output: 2

Input: nums = [0,1]  
Output: 2

## Approach

- The numbers are in range [0, n]
- Total expected sum = n * (n + 1) / 2
- Subtract actual array sum from expected sum
- The difference is the missing number

## Complexity

Time Complexity: O(n)  
Space Complexity: O(1)

## LeetCode
Missing Number (Easy)
