function groupAnagrams(strs) {
    var items = strs.sort(function (a, b) { return a.length - b.length; });
    var empty = strs.filter(function (st) { return st === ''; });
    var arr = [];
    if (empty === null || empty === void 0 ? void 0 : empty.length)
        arr.push(empty);
    var _loop_1 = function (index) {
        var item = sortAlphabets(strs[index]);
        if (strs[index]) {
            var filter = items.filter(function (n) { return sortAlphabets(n) === item; });
            var _loop_2 = function (j) {
                var element = filter[j];
                var index_1 = strs.findIndex(function (s) { return s === element; });
                if (index_1 !== -1) {
                    items.splice(index_1, 1);
                }
            };
            for (var j = 0; j < filter.length; j++) {
                _loop_2(j);
            }
            arr.push(filter);
        }
    };
    for (var index = 0; index < strs.length; index++) {
        _loop_1(index);
    }
    // return items.length ? arr.concat([items]) : arr;
    if (items.length) {
        items.forEach(function (n) {
            if (n)
                arr.push([n]);
        });
        return arr.sort(function (a, b) { return a.length - b.length; });
    }
    else
        return arr.sort(function (a, b) { return a.length - b.length; });
}
;
var sortAlphabets = function (text) {
    return text.split('').sort().join('');
};
console.log("strStr", groupAnagrams(["stop", "pots", "reed", "", "tops", "deer", "opts", ""]));
// 49. Group Anagrams
