function sumTwo(num, target) {
  const map = {};
  for (let i = 0; i < num.length; i++){
    const complement = target - num[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[num[i]] = i;
  }
};

console.log(sumTwo([2, 7, 11, 15],9))