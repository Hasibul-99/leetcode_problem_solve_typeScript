function isAlienSorted(words, order) {
    var map = {};
    for (var i = 0; i < order.length; i += 1) {
        map[order[i]] = i;
    }
    outer: for (var i = 0; i < words.length - 1; i += 1) {
        var current = words[i];
        var next = words[i + 1];
        var minLength = Math.min(current.length, next.length);
        for (var i_1 = 0; i_1 < minLength; i_1 += 1) {
            if (current[i_1] === next[i_1])
                continue;
            if (map[current[i_1]] < map[next[i_1]])
                continue outer;
            if (map[current[i_1]] > map[next[i_1]])
                return false;
        }
        if (current.length > next.length)
            return false;
    }
    return true;
}
;
console.log("isAlienSorted", isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
