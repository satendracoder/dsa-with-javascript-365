# Day 20_Feb – Longest Common Prefix

Write a function to find the longest common prefix string
among an array of strings.

If there is no common prefix, return an empty string "".

## Example

Input: strs = ["flower","flow","flight"]  
Output: "fl"

Input: strs = ["dog","racecar","car"]  
Output: ""

## Approach

- Take first string as prefix
- Compare it with other strings
- While current string does not start with prefix:
    - Remove last character from prefix
- Continue until prefix is found or becomes empty

## Complexity

Time Complexity: O(n * m)
(n = number of strings, m = length of prefix)

Space Complexity: O(1)

## LeetCode
Longest Common Prefix (Easy)
