var isIsomorphic = function(s, t) {
    const mapST = {};
    const mapTS = {};

    for (let i = 0; i < s.length; i++) {
        if ((mapST[s[i]] && mapST[s[i]] !== t[i]) ||
            (mapTS[t[i]] && mapTS[t[i]] !== s[i])) {
            return false;
        }
        mapST[s[i]] = t[i];
        mapTS[t[i]] = s[i];
    }
    return true;
};
