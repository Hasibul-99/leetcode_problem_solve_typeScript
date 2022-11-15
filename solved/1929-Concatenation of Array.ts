function getConcatenation(nums: number[]): number[] {
    return [...nums, ...nums];
};

console.log("getConcatenation =>", getConcatenation([1,3,2,1]));