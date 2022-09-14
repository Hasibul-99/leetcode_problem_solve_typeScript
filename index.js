function validMountainArray(arr) {
    var result = true;
    var max = Math.max.apply(Math, arr), index = arr.findIndex(function (a) { return a === max; });
    if (index === 0)
        return false;
    if (index === arr.length - 1)
        return false;
    // console.log(max);
    // ====>
    for (var i = index; i < arr.length; i++) {
        var ele = arr[i], next = arr[i + 1];
        if (next && ele <= next) {
            console.log({ ele: ele, next: next });
            result = false;
            break;
        }
    }
    // <====
    for (var j = index; j >= 0; j--) {
        var ele = arr[j], pre = arr[j - 1];
        // console.log("ele2", ele);
        if (pre && ele <= pre) {
            console.log({ ele: ele, pre: pre });
            result = false;
            break;
        }
    }
    return result;
}
;
console.log("validMountainArray", validMountainArray([1, 3, 2]));
