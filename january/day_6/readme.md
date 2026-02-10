# Day-006: Encode and Decode Strings (LeetCode #271)

## 📌 Problem Statement
Design an algorithm to encode a list of strings to a single string and decode it back to the original list.

---

## 🧪 Example

Input:
["lint","code","love","you"]

Encoded:
"4#lint4#code4#love3#you"

Decoded:
["lint","code","love","you"]

---

## 🧠 Approach (Length + Delimiter)

### Algorithm:
- Encode each string as: length + '#' + string
- Decode by reading length, then extracting the string

This approach is safe for all characters.

---

## 💻 JavaScript Solution

```js
var encode = function(strs) {
    let encoded = "";
    for (let str of strs) {
        encoded += str.length + "#" + str;
    }
    return encoded;
};

var decode = function(s) {
    const result = [];
    let i = 0;

    while (i < s.length) {
        let j = i;
        while (s[j] !== "#") j++;

        const length = parseInt(s.substring(i, j));
        const word = s.substring(j + 1, j + 1 + length);

        result.push(word);
        i = j + 1 + length;
    }

    return result;
};
