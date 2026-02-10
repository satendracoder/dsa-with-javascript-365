function encode(strs) {
  let encoded = "";

  for (let str of strs) {
    encoded += str.length + "#" + str;
  }
  return encoded;
}

function decode(s) {
  const result = [];
  let i = 0;

  while (i < s.length) {
    let j = i;

    while (s[j] !== "#") {
        j++
    }

    const length = parseInt(s.substring(i, j));
    const word = s.substring(j + 1, j + 1 + length);

    result.push(word)
    i = j + 1 + length;
  }
  return result;
}

console.log(encode(["lint", "code", "love", "you"]))