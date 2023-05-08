function map(arr: number[], fn: (n: number, i: number) => number): number[] {

    return arr.map((v, i) => fn(v, i))
};

console.log("map", map([1,2,3], function plusone(n) { return n + 1; }));
