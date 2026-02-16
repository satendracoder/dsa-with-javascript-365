# Day 16_Feb – Valid Palindrome

Given a string s, determine if it is a palindrome,
considering only alphanumeric characters and ignoring cases.

## Example

Input: s = "A man, a plan, a canal: Panama"  
Output: true

Input: s = "race a car"  
Output: false

## Approach

- Convert string to lowercase
- Remove all non-alphanumeric characters
- Use two pointers:
  - One from start
  - One from end
- Compare characters while moving inward

## Complexity

Time Complexity: O(n)  
Space Complexity: O(1)

## LeetCode
Valid Palindrome (Easy)
