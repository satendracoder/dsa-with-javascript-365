# Day 13_Feb – Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times.
You may assume that the majority element always exists.

## Example

Input: nums = [3,2,3]  
Output: 3

Input: nums = [2,2,1,1,1,2,2]  
Output: 2

## Approach

- Use Boyer-Moore Voting Algorithm
- Keep a candidate and count
- If count becomes 0 → change candidate
- Increase count if same element
- Decrease count if different element

## Complexity

Time Complexity: O(n)  
Space Complexity: O(1)

## LeetCode
Majority Element (Easy)
