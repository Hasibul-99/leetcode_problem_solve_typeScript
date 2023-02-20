function searchInsert(nums: number[], target: number): number {
    // let index = 0;

    // if (!target || !nums.length || nums[0] > target) return 0;

    // for (let i = 0; i < nums.length; i++) {
    //     const ele = nums[i];

    //     if (ele === target) {
    //         index = i;
    //         break;
    //     } else {
    //         if (ele < target && nums[i + 1] && nums[i + 1] > target) {
    //             index = i + 1;
    //             break;
    //         } else {
    //             index = nums.length;
    //         }
    //     }
    // }

    // return index;

    let left = 0,
        right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;

};

console.log("searchInsert", searchInsert([1, 3, 5, 6], 2));
