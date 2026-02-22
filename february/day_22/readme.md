# Day 22_Feb – Implement strStr()

Given two strings haystack and needle,
return the index of the first occurrence of needle in haystack.

If needle is not part of haystack, return -1.

## Example

Input: haystack = "sadbutsad", needle = "sad"  
Output: 0

Input: haystack = "leetcode", needle = "leeto"  
Output: -1

## Approach

- If needle is empty → return 0
- Loop through haystack
- Compare substring of length needle
- If match found → return index
- If no match → return -1

## Complexity

Time Complexity: O(n * m)  
Space Complexity: O(1)

(n = length of haystack, m = length of needle)

## LeetCode
Implement strStr() (Easy)
