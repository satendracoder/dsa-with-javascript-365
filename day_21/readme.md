# Day 23 – Pascal’s Triangle

Generate the first numRows of Pascal’s Triangle.

Example:
Input: 5  
Output:
[
[1],
[1,1],
[1,2,1],
[1,3,3,1],
[1,4,6,4,1]
]

Approach:

- First and last elements are always 1
- Middle elements = sum of two above elements

Time Complexity: O(n²)  
Space Complexity: O(n²)

LeetCode: Pascal’s Triangle (Easy)
