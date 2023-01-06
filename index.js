function findMinArrowShots(points) {
    var arrows = 1;
    var items = points.sort(function (a, b) { return a[1] - b[1]; });
    var endPoint = items[0][1];
    for (var i = 0; i < items.length; i++) {
        if (endPoint < points[i][0]) {
            arrows = arrows + 1;
            endPoint = points[i][1];
        }
    }
    return arrows;
}

console.log("findMinArrowShots", findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]]));
