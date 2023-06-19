function largestAltitude(gain) {
    var res = 0, start = 0;
    for (var i = 0; i < gain.length; i++) {
        var ele = start + gain[i];
        console.log({ start: start, ele: ele }, Math.max(ele, start));
        res = Math.max(ele, start, res);
        start = ele;
    }
    return res > 0 ? res : 0;
}
;
console.log("largestAltitude", largestAltitude([52, -91, 72]));
