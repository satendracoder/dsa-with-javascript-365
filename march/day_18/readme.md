# Day 18_March – Middle of Linked List

Given the head of a singly linked list,
return the middle node of the linked list.

If there are two middle nodes,
return the second middle node.

## Example

Input: head = [1,2,3,4,5]  
Output: [3,4,5]

Input: head = [1,2,3,4,5,6]  
Output: [4,5,6]

## Approach

- Use two pointers:
  - slow → moves 1 step
  - fast → moves 2 steps
- When fast reaches end,
  slow will be at middle

## Complexity

Time Complexity: O(n)  
Space Complexity: O(1)

## LeetCode
Middle of the Linked List (Easy)
