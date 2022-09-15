// 2007. Find Original Array From Doubled Array JavaScript / typeScript 
function findOriginalArray(changed) {
    if ((changed.length % 2) !== 0)
        return [];
    var result = [], q = [];
    changed.sort(function (a, b) { return a - b; });
    changed.forEach(function (num) {
        if (q.length && num === q[0]) {
            q.shift();
        }
        else {
            q.push(num * 2);
            result.push(num);
        }
    });
    console.log("result", result);
    console.log("q", q);
    return q.length ? [] : result;
}
;
console.log("findOriginalArray", findOriginalArray([6, 3, 0, 1]));
