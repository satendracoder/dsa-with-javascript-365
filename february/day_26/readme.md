# Day 26_Feb – First Unique Character in a String

Given a string s, find the first non-repeating character in it
and return its index.

If it does not exist, return -1.

## Example

Input: s = "leetcode"  
Output: 0

Input: s = "loveleetcode"  
Output: 2

Input: s = "aabb"  
Output: -1

## Approach

- Create a frequency map of characters
- Traverse the string again
- Return the first index where frequency is 1
- If none found → return -1

## Complexity

Time Complexity: O(n)  
Space Complexity: O(1) (only lowercase letters)

## LeetCode
First Unique Character in a String (Easy)
