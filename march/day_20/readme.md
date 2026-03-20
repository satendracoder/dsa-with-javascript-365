# Day 20_March – Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted linked list
and return the head of the merged list.

## Example

Input: list1 = [1,2,4], list2 = [1,3,4]  
Output: [1,1,2,3,4,4]

Input: list1 = [], list2 = []  
Output: []

Input: list1 = [], list2 = [0]  
Output: [0]

## Approach

- Use a dummy node to simplify logic
- Compare nodes of both lists
- Attach the smaller node to result list
- Move pointer forward
- When one list ends:
  - Attach remaining part of other list

## Complexity

Time Complexity: O(n + m)  
Space Complexity: O(1)

## LeetCode
Merge Two Sorted Lists (Easy)
