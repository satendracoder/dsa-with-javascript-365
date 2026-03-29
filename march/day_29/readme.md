# Day 29_March – Longest Repeating Character Replacement

Given a string s and an integer k,
you can choose any character of the string and change it to any other character at most k times.

Return the length of the longest substring containing the same letter
you can get after performing the above operations.

## Example

Input: s = "ABAB", k = 2  
Output: 4  

Input: s = "AABABBA", k = 1  
Output: 4  

## Approach

- Use Sliding Window
- Maintain frequency map of characters
- Track max frequency in current window
- Condition:
  window size - maxFreq <= k
- If not valid:
  shrink window from left
- Track maximum window length

## Complexity

Time Complexity: O(n)  
Space Complexity: O(1)

## LeetCode
Longest Repeating Character Replacement (Medium)
