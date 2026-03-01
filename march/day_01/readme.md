# Day 01_March – Happy Number

Write an algorithm to determine if a number n is a happy number.

A happy number is defined as:
- Starting with any positive integer
- Replace the number by the sum of the squares of its digits
- Repeat the process
- If it ends in 1 → it is a happy number
- If it loops endlessly in a cycle that does not include 1 → not happy

## Example

Input: n = 19  
Output: true  

Explanation:
1² + 9² = 82  
8² + 2² = 68  
6² + 8² = 100  
1² + 0² + 0² = 1  

## Approach

- Use a Set to detect cycles
- While n is not 1:
    - Calculate sum of squares of digits
    - If already seen → cycle detected → return false
    - Store number in Set
- If n becomes 1 → return true

## Complexity

Time Complexity: O(log n)  
Space Complexity: O(log n)

## LeetCode
Happy Number (Easy)
