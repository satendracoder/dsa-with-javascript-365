# Day 27_Feb – Roman to Integer

Roman numerals are represented by seven different symbols:
I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Given a roman numeral, convert it to an integer.

## Example

Input: s = "III"  
Output: 3

Input: s = "LVIII"  
Output: 58

Input: s = "MCMXCIV"  
Output: 1994

## Approach

- Create a map of Roman symbols to values
- Traverse the string from left to right
- If current value < next value:
    - Subtract current value
- Else:
    - Add current value
- Return total

## Complexity

Time Complexity: O(n)  
Space Complexity: O(1)

## LeetCode
Roman to Integer (Easy)
