# Day 24_Feb – Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if:
- Characters in s can be replaced to get t
- All occurrences of a character must map to the same character
- No two characters may map to the same character
- A character may map to itself

## Example

Input: s = "egg", t = "add"  
Output: true

Input: s = "foo", t = "bar"  
Output: false

Input: s = "paper", t = "title"  
Output: true

## Approach

- If lengths are different → return false
- Use two hash maps:
  - mapST → mapping from s to t
  - mapTS → mapping from t to s
- Check:
  - If mapping exists, it must match
  - If not, create mapping
- If conflict occurs → return false

## Complexity

Time Complexity: O(n)  
Space Complexity: O(1)

## LeetCode
Isomorphic Strings (Easy)
