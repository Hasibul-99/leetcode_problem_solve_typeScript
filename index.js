function relativeSortArray(arr1, arr2) {
    var arr = [];
    var notMatch = arr1.filter(function (item) {
        return !arr2.includes(item);
    }).sort(function (a, b) { return a - b; });
    arr2.forEach(function (i) {
        var values = arr1.filter(function (d) { return d === i; });
        arr = arr.concat(values);
    });
    return arr.concat(notMatch);
}
;
console.log("relativeSortArray", relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));
