# Day 28_Feb – Longest Duplicate Substring

Given a string s, return the longest substring that appears
at least twice in the string.

If no such substring exists, return an empty string "".

## Example

Input: s = "banana"  
Output: "ana"

Input: s = "abcd"  
Output: ""

## Approach

- Use Binary Search on substring length
- Use Set to check duplicate substrings of given length
- For each mid length:
    - Slide window and store substrings
    - If duplicate found → try longer length
    - Else → try shorter length
- Track longest valid substring found

## Complexity

Time Complexity: O(n² log n)  
Space Complexity: O(n)

## LeetCode
Longest Duplicate Substring (Hard)
