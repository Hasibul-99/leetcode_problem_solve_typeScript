function rotate(nums: number[], k: number): void {
    for (let i = 0; i < k; i++) {
        let lasNam : number = nums.pop() || 0;
        nums.unshift(lasNam);
    }
};

console.log("rotate", rotate([1,2,3,4,5,6,7], 3));
