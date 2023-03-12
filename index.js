function countNegatives(grid) {
    var res = 0;
    for (var i = 0; i < grid.length; i++) {
        var arr = grid[i];
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] < 0)
                res++;
        }
    }
    return res;
}
;
console.log("countNegatives", countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]));
