function pivotIndex(nums) {
    var index = -1;
    for (var i = 0; i < nums.length; i++) {
        var left = nums.slice(0, i);
        var right = nums.slice(i + 1);
        console.log("arr2.splice(0,1)", { left: left, right: right });
        var leftTotal = (left === null || left === void 0 ? void 0 : left.length) ? left.reduce(function (total, val) { return (total || 0) + val; }) : 0;
        var rightTotal = (right === null || right === void 0 ? void 0 : right.length) ? right.reduce(function (total, val) { return (total || 0) + val; }) : 0;
        console.log({ leftTotal: leftTotal, rightTotal: rightTotal });
        if (leftTotal === rightTotal) {
            index = i;
            break;
        }
    }
    return index;
}
;
console.log("pirvotIndex", pivotIndex([2, 1, -1]));
