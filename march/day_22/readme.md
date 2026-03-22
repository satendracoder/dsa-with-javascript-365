# Day 22_March – Palindrome Linked List

Given the head of a singly linked list,
return true if it is a palindrome, otherwise false.

## Example

Input: head = [1,2,2,1]  
Output: true  

Input: head = [1,2]  
Output: false  

## Approach

- Use fast & slow pointers to find middle
- Reverse second half of the list
- Compare first half and reversed second half
- If all values match → palindrome

## Complexity

Time Complexity: O(n)  
Space Complexity: O(1)

## LeetCode
Palindrome Linked List (Easy)
