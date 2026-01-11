function groupAnagrams(strs) {
    var map = new Map();
    for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
        var str = strs_1[_i];
        // const sorted = [...str].sort().join('');
        // if (map.has(sorted)) {
        //     map.get(sorted)!.push(str);
        // } else {
        //     map.set(sorted, [str]);
        // }
        var key = str.split('').sort().join('');
        if (map.has(key)) {
            map.get(key).push(str);
        }
        else {
            map.set(key, [str]);
        }
    }
    return Array.from(map.values());
}
;
console.log("containsDuplicate", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
