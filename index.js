function map(arr, fn) {
    return arr.map(function (v, i) { return fn(v, i); });
}
;
console.log("map", map([1, 2, 3], function plusone(n) { return n + 1; }));
