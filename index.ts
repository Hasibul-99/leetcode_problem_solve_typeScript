function maxWidthOfVerticalArea(points: number[][]): number {
    let xPoint = points.map(point => point[0]).sort((a, b) => a - b);

    console.log(xPoint);

    let res: number = 0
    
    for (let i = 1; i < xPoint.length; i++) {
        res = Math.max(res, (xPoint[i] - xPoint[i -1]))
    }

    return res;
};

console.log("maxWidthOfVerticalArea", maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]));
