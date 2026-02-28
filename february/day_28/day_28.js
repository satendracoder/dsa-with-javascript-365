var longestDupSubstring = function(s) {
  let left = 1;
  let right = s.length - 1;
  let result = "";

  const hasDuplicate = (len) => {
    let seen = new Set();

    for (let i = 0; i <= s.length - len; i++) {
      let sub = s.substring(i, i + len);
      if (seen.has(sub)) return sub;
      seen.add(sub);
    }

    return null;
  };

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let duplicate = hasDuplicate(mid);

    if (duplicate) {
      result = duplicate;
      left = mid + 1; // try longer
    } else {
      right = mid - 1; // try shorter
    }
  }

  return result;
};
