# Day 25_Feb – Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring
without repeating characters.

## Example

Input: s = "abcabcbb"  
Output: 3  
Explanation: "abc" is the longest substring.

Input: s = "bbbbb"  
Output: 1  

Input: s = "pwwkew"  
Output: 3  
Explanation: "wke" is the longest substring.

## Approach

- Use Sliding Window technique
- Maintain a set to store unique characters
- Use two pointers (left & right)
- If duplicate found:
    - Move left pointer
    - Remove characters until duplicate is gone
- Track maximum window length

## Complexity

Time Complexity: O(n)  
Space Complexity: O(n)

## LeetCode
Longest Substring Without Repeating Characters (Medium)
