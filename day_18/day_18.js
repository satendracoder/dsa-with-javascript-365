var validWordAbbreviation = function(word, abbr) {
    let i = 0, j = 0;

    while (i < word.length && j < abbr.length) {
        if (isNaN(abbr[j])) {
            if (word[i] !== abbr[j]) return false;
            i++;
            j++;
        } else {
            if (abbr[j] === '0') return false; // leading zero not allowed
            let num = 0;
            while (j < abbr.length && !isNaN(abbr[j])) {
                num = num * 10 + Number(abbr[j]);
                j++;
            }
            i += num;
        }
    }
    return i === word.length && j === abbr.length;
};
