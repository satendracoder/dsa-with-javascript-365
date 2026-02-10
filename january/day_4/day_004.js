function groupAnagrams(strs) {
  const map = {}
  for (let word of strs) {
    const key = word.split('').sort().join('');

    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(word);
  }
  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))