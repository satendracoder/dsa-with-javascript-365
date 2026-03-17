# Day 17_March – Reverse Linked List

Given the head of a singly linked list,
reverse the list and return the reversed list.

## Example

Input: head = [1,2,3,4,5]  
Output: [5,4,3,2,1]

Input: head = [1,2]  
Output: [2,1]

Input: head = []  
Output: []

## Approach

- Use three pointers:
  - prev → initially null
  - curr → head
  - next → store next node
- Reverse links one by one:
  - curr.next = prev
- Move pointers forward
- Return prev as new head

## Complexity

Time Complexity: O(n)  
Space Complexity: O(1)

## LeetCode
Reverse Linked List (Easy)
