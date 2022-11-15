function maxArea(height: number[]): number {
    let area = 0,
        i = 0,
        j = height.length - 1;

    // for (let i = 0; i < height.length; i++) {
    //     for (let j = i + 1; j < height.length; j++) {
    //         area = Math.max(area, Math.min(height[j], height[i]) * (j - i))
    //     }
    // }

    while(i < j) {
        area = Math.max(area, Math.min(height[j], height[i]) * (j - i));

        if (height[i] <= height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return area;
};

console.log("maxArea =>", maxArea([1,8,6,2,5,4,8,3,7]));

