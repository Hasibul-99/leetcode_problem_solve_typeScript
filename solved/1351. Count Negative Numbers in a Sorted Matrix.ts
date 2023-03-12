function countNegatives(grid: number[][]): number {

    let res = 0;

    for (let i = 0; i < grid.length; i++) {
        const arr = grid[i];

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < 0) res++;
        }
    }

    return res;
};

console.log("countNegatives",countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]));
