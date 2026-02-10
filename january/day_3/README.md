# Two Sum (LeetCode #1)

## 📌 Problem Statement

Given an array of integers `nums` and a target integer `target`, return the indices of the two numbers such that they add up to the target.

You may assume:

- Exactly one solution exists
- You cannot use the same element twice

---

## 🧪 Example

**Input**
nums = [2,7,11,15]
target = 9

**Output**

[0,1]

---

## 🧠 Approach (Hash Map)

### Algorithm:

1. Create a hash map to store numbers and their indices
2. Traverse the array
3. For each element, calculate `target - currentElement`
4. If the complement exists in map, return indices
5. Otherwise, store the element in map

---

## 💻 JavaScript Solution

```js
var twoSum = function(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map[complement] !== undefined) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }
};

⏱ Complexity Analysis

Time Complexity: O(n)

Space Complexity: O(n)
```
