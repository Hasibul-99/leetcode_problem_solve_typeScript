function maxWidthOfVerticalArea(points) {
    var xPoint = points.map(function (point) { return point[0]; }).sort(function (a, b) { return a - b; });
    console.log(xPoint);
    var res = 0;
    for (var i = 1; i < xPoint.length; i++) {
        res = Math.max(res, (xPoint[i] - xPoint[i - 1]));
    }
    return res;
}
;
console.log("maxWidthOfVerticalArea", maxWidthOfVerticalArea([[3, 1], [9, 0], [1, 0], [1, 4], [5, 3], [8, 8]]));
