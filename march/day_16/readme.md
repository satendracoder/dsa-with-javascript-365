Day 16_March – Evaluate Reverse Polish Notation

Evaluate the value of an arithmetic expression in Reverse Polish Notation (RPN).

Valid operators are +, -, *, /.
Each operand may be an integer.

Division between two integers should truncate toward zero.

Example

Input:
tokens = ["2","1","+","3","*"]

Output:
9

Explanation:
((2 + 1) * 3) = 9

Input:
tokens = ["4","13","5","/","+"]

Output:
6

Explanation:
4 + (13 / 5) = 6

Approach

Use a stack

Traverse tokens

If number → push into stack

If operator → pop two numbers

Apply operation

Push result back into stack

Final result will be on top of stack

Complexity

Time Complexity: O(n)
Space Complexity: O(n)

LeetCode

Evaluate Reverse Polish Notation (Medium)
