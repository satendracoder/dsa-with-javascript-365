# Day 30_March – Find All Anagrams in a String

Given two strings s and p,
return an array of all the start indices of p's anagrams in s.

You may return the answer in any order.

## Example

Input: s = "cbaebabacd", p = "abc"  
Output: [0,6]

Input: s = "abab", p = "ab"  
Output: [0,1,2]

## Approach

- Use Sliding Window + Frequency Count
- Create frequency map for string p
- Maintain a window of size p.length
- Compare frequency of window with p
- If same → add starting index
- Slide window forward

## Complexity

Time Complexity: O(n)  
Space Complexity: O(1)

## LeetCode
Find All Anagrams in a String (Medium)
