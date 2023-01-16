var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function insert(intervals, newInterval) {
    var result = [];
    for (var i = 0; i < intervals.length; i++) {
        var interval = intervals[i];
        // If overlaps
        if (Math.max(interval[0], newInterval[0]) <= Math.min(interval[1], newInterval[1])) {
            newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])];
            continue;
        }
        // If lower
        if (interval[0] > newInterval[1]) {
            console.log.apply(console, __spreadArray(["ee", newInterval], intervals.slice(i), false));
            result.push.apply(result, __spreadArray([newInterval], intervals.slice(i), false));
            return result;
        }
        result.push(interval);
    }
    result.push(newInterval);
    return result;
}
;
console.log("insert", insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])); //[[1,2],[3,10],[12,16]]
