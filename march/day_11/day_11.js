var isValid = function(s) {
  let stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (map[char]) {
      let top = stack.pop();
      if (top !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
