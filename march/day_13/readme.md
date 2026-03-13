# Day 13_March – Next Greater Element I

The next greater element of some element x in nums1 is
the first greater element to the right of x in nums2.

Given two distinct arrays nums1 and nums2,
return an array of the next greater numbers for elements in nums1.

If it does not exist, return -1.

## Example

Input:
nums1 = [4,1,2]
nums2 = [1,3,4,2]

Output:
[-1,3,-1]

Input:
nums1 = [2,4]
nums2 = [1,2,3,4]

Output:
[3,-1]

## Approach

- Use a **Monotonic Stack**
- Traverse nums2
- Maintain decreasing stack
- When current number is greater than stack top:
  - Pop stack
  - Map popped element → current number
- Store result in a map
- Build answer for nums1 using this map

## Complexity

Time Complexity: O(n)  
Space Complexity: O(n)

## LeetCode
Next Greater Element I (Easy)
