# Day 07 – Longest Consecutive Sequence

Find the length of the longest consecutive sequence in an unsorted array.

Example:
Input: [100,4,200,1,3,2]  
Output: 4

Approach:
- Use a Set to store numbers.
- Start counting only if `num - 1` is not present.

Time Complexity: O(n)  
Space Complexity: O(n)

LeetCode: Longest Consecutive Sequence (Medium)
