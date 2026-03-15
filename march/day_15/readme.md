Day 15_March – Daily Temperatures

Find how many days you must wait until a warmer temperature.

Example

Input:
temperatures = [73,74,75,71,69,72,76,73]

Output:
[1,1,4,2,1,1,0,0]

Approach

Use a monotonic stack

Store indices of temperatures

When current temperature is greater than stack top

Pop index and calculate days difference

Push current index to stack

Complexity

Time Complexity: O(n)
Space Complexity: O(n)

LeetCode

Daily Temperatures (Medium)
