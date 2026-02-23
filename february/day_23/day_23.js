var compress = function(chars) {
  let index = 0;  // write pointer
  let i = 0;      // read pointer

  while (i < chars.length) {
    let currentChar = chars[i];
    let count = 0;

    while (i < chars.length && chars[i] === currentChar) {
      i++;
      count++;
    }

    chars[index++] = currentChar;

    if (count > 1) {
      let countStr = count.toString();
      for (let digit of countStr) {
        chars[index++] = digit;
      }
    }
  }

  return index;
};
