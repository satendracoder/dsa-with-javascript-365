# Day 24 – Unique Email Addresses

Count the number of unique email addresses after normalization.

Rules:

- Ignore dots (.) in local name
- Ignore everything after '+' in local name

Example:
Input: ["a.b+c@leetcode.com","ab@leetcode.com"]  
Output: 1

Approach:

- Split email into local and domain
- Normalize local part
- Store in Set

Time Complexity: O(n)  
Space Complexity: O(n)

LeetCode: Unique Email Addresses (Easy)
