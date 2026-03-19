# Day 19_March – Linked List Cycle

Given head, the head of a linked list,
determine if the linked list has a cycle in it.

Return true if there is a cycle, otherwise return false.

## Example

Input: head = [3,2,0,-4], pos = 1  
Output: true  
Explanation: Tail connects to node at index 1

Input: head = [1,2], pos = 0  
Output: true

Input: head = [1], pos = -1  
Output: false

## Approach

- Use two pointers:
  - slow → moves 1 step
  - fast → moves 2 steps
- If there is a cycle:
  - slow and fast will meet
- If fast reaches null:
  - no cycle

## Complexity

Time Complexity: O(n)  
Space Complexity: O(1)

## LeetCode
Linked List Cycle (Easy)
