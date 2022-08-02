function kthSmallest(matrix: number[][], k: number): number {
    let arr = matrix.reduce((r, e) => (r.push(...e), r), []);

    arr.sort(function(a, b){return a - b});

    return arr[k - 1];
};


console.log("kthSmallest", kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8));