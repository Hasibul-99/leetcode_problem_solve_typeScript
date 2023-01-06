function findMinArrowShots(points: number[][]): number {
    let arrows = 1;
    let items = points.sort((a,b) => a[1] -b[1]);
    let endPoint = items[0][1];

    for (let i = 0; i < items.length; i++) {
        if (endPoint < points[i][0]) {
            arrows = arrows + 1;
            endPoint = points[i][1]
        }
    }

    return arrows;
};

console.log("findMinArrowShots", findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]));
