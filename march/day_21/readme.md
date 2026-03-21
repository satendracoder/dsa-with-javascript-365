# Day 21_March – Remove Nth Node From End of List

Given the head of a linked list,
remove the nth node from the end of the list
and return its head.

## Example

Input: head = [1,2,3,4,5], n = 2  
Output: [1,2,3,5]

Input: head = [1], n = 1  
Output: []

## Approach

- Use two pointers:
  - fast → move n steps ahead
  - slow → start from head
- Move both pointers until fast reaches end
- slow will be before the node to remove
- Remove node by updating pointers

- Use a dummy node to handle edge cases

## Complexity

Time Complexity: O(n)  
Space Complexity: O(1)

## LeetCode
Remove Nth Node From End of List (Medium)
