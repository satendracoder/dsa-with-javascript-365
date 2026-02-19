# Day 19_Feb – Reverse Words in a String

Given a string s, reverse the order of the words.

A word is defined as a sequence of non-space characters.
Return a string of the words in reverse order.

## Example

Input: s = "the sky is blue"  
Output: "blue is sky the"

Input: s = "  hello world  "  
Output: "world hello"

Input: s = "a good   example"  
Output: "example good a"

## Approach

- Trim extra spaces from start and end
- Split string by one or more spaces
- Reverse the array of words
- Join words with single space

## Complexity

Time Complexity: O(n)  
Space Complexity: O(n)

## LeetCode
Reverse Words in a String (Medium)
