# Day 11_March – Valid Parentheses

Given a string s containing just the characters
'(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

A string is valid if:
- Open brackets must be closed by the same type
- Open brackets must be closed in the correct order
- Every closing bracket has a corresponding open bracket

## Example

Input: s = "()"  
Output: true

Input: s = "()[]{}"  
Output: true

Input: s = "(]"  
Output: false

Input: s = "([)]"  
Output: false

Input: s = "{[]}"  
Output: true

## Approach

- Use a Stack
- Push opening brackets onto stack
- When a closing bracket appears:
  - Check if it matches the top of stack
  - If not → return false
- At the end stack must be empty

## Complexity

Time Complexity: O(n)  
Space Complexity: O(n)

## LeetCode
Valid Parentheses (Easy)
