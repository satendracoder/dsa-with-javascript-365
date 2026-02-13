# Day 14_Feb – Single Number

Given a non-empty array of integers, every element appears twice except for one.
Find that single one.

You must implement a solution with linear runtime complexity
and use only constant extra space.

## Example

Input: nums = [2,2,1]  
Output: 1

Input: nums = [4,1,2,1,2]  
Output: 4

## Approach

- Use XOR operator (^)
- Same numbers cancel out:
  a ^ a = 0
- XOR with 0 gives number:
  a ^ 0 = a
- XOR all elements
- Remaining value is the single number

## Complexity

Time Complexity: O(n)  
Space Complexity: O(1)

## LeetCode
Single Number (Easy)
