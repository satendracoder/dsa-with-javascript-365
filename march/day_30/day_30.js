var findAnagrams = function(s, p) {
  let result = [];

  let need = new Array(26).fill(0);
  let window = new Array(26).fill(0);

  for (let char of p) {
    need[char.charCodeAt(0) - 97]++;
  }

  let left = 0;
  let right = 0;
  let requiredLength = p.length;

  while (right < s.length) {
    let indexRight = s.charCodeAt(right) - 97;
    window[indexRight]++;

    if (need[indexRight] >= window[indexRight]) {
      requiredLength--;
    }

    if (right - left + 1 > p.length) {
      let indexLeft = s.charCodeAt(left) - 97;

      if (need[indexLeft] >= window[indexLeft]) {
        requiredLength++;
      }

      window[indexLeft]--;
      left++;
    }

    if (requiredLength === 0) {
      result.push(left);
    }

    right++;
  }

  return result;
};
