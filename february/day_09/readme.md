# Day 09 – Plus One

You are given a large integer represented as an array of digits.
Increment the integer by one and return the resulting array.

## Example
Input: digits = [1,2,3]  
Output: [1,2,4]

Input: digits = [9,9,9]  
Output: [1,0,0,0]

## Approach
- Start from the last digit
- If digit < 9, add 1 and return
- If digit is 9, set it to 0 and continue
- If all digits are 9, add 1 at the front

## Complexity
Time Complexity: O(n)  
Space Complexity: O(1)

## LeetCode
Plus One (Easy)
