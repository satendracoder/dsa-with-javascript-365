# Day 12_March – Min Stack

Design a stack that supports push, pop, top,
and retrieving the minimum element in constant time.

Implement the MinStack class:

push(val) → pushes element onto stack  
pop() → removes the element on top  
top() → get the top element  
getMin() → retrieve the minimum element

All operations must run in O(1) time.

## Example

Input:
["MinStack","push","push","push","getMin","pop","top","getMin"]

Output:
[null,null,null,null,-3,null,0,-2]

## Approach

- Use two stacks:
  1. main stack → store elements
  2. min stack → track minimum values

- When pushing:
  - Push value to main stack
  - Push min(currentMin, val) to min stack

- When popping:
  - Pop from both stacks

- Minimum element is always on top of min stack

## Complexity

Time Complexity: O(1)  
Space Complexity: O(n)

## LeetCode
Min Stack (Medium)
