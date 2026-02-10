# Valid Anagram (LeetCode #242)

## 📌 Problem Statement

Given two strings `s` and `t`, return `true` if `t` is an **anagram** of `s`, and `false` otherwise.

👉 An anagram means both strings contain the **same characters with the same frequency**, but the order can be different.

---

## 🧪 Examples

### Example 1

**Input:**
s = "anagram"
t = "nagaram"

**Output:**

true

### Example 2

**Input:**

s = "rat"
t = "car"

**Output:**

false

---

## 🧠 Approach (Hash Map / Frequency Count)

### Algorithm Steps:

1. If lengths of `s` and `t` are different → return `false`
2. Create a hash map to store character frequency
3. Traverse string `s` and increment frequency of each character
4. Traverse string `t` and decrement frequency
5. If any character count becomes negative or missing → return `false`
6. If all checks pass → return `true`

---

## 💻 JavaScript Solution

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = {};

  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let char of t) {
    if (!map[char]) return false;
    map[char]--;
  }

  return true;
};
```
