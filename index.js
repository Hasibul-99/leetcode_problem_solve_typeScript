function maxPoints(points) {
    var len = points.length, max = 2;
    if (len <= 2)
        return len;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            var total = 2;
            for (var k = 0; k < len; k++) {
                if (k !== i && k !== j) {
                    // d = ((y2 -y1)/(x2 -x1)) * ((y3 -y1) /(x3 - x1));
                    if (((points[j][1] - points[i][1]) * (points[i][0] - points[k][0])) === ((points[i][1] - points[k][1]) * (points[j][0] - points[i][0]))) {
                        total = total + 1;
                    }
                }
            }
            console.log({ max: max, total: total });
            max = Math.max(max, total);
        }
    }
    return max;
}
;
console.log("maxPoints", maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]));
