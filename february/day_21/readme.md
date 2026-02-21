# Day 21_Feb – Valid Anagram

Given two strings s and t, return true if t is an anagram of s,
and false otherwise.

An Anagram is a word formed by rearranging the letters
of another word, using all the original letters exactly once.

## Example

Input: s = "anagram", t = "nagaram"  
Output: true

Input: s = "rat", t = "car"  
Output: false

## Approach

- If lengths are different → return false
- Create a frequency map
- Count characters from first string
- Decrease count using second string
- If any count becomes negative → not an anagram

## Complexity

Time Complexity: O(n)  
Space Complexity: O(1) (since only lowercase letters)

## LeetCode
Valid Anagram (Easy)
