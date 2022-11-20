function threeSum(nums: number[]): number[][] {
    let arr: any = [];

    if (nums.length >= 3) {

        nums.sort((a, b) => a-b);

        for (let i = 0; i < nums.length -2 ; i++) {
            let iNum = nums[i];

            for (let j = i + 1; j < nums.length -1; j++) {
                let jNum = nums[j];

                for (let k = j + 1; k < nums.length; k++) {
                    let kNum = nums[k];
                    // console.log({iNum, jNum, kNum});

                    if ((iNum + jNum + kNum) === 0) {
                        let newItem = [iNum, jNum, kNum];
                        let findIdx = arr.findIndex(i => i.sort().toString() == newItem.sort().toString());

                        if (findIdx === -1) arr.push(newItem)
                    }
                }
            }
        }        
    }

    return arr;
};

console.log("threeSum", threeSum([11,-8,9,-6,-10,14,-5,-10,2,-1,-14,-13,-5,9,-5,-12,9,5,-1,-4,-14,5,-11,3,6,-7,2,-14,9,-6,-8,-2,-7,8,7,-2,7,9,3,-14,-14,5,-12,-4,-9,-1,-8,7,11,-2,-11,4,-11,-15,-7,10,-7,10,4,10,11,11,-7,-11,4,7,2,-12,1,12,-10,2,2,-15,6,1,-1,13,-7,-12,-4,-11,7,0,-11,-15,-12,-10,2,7,-15,-2,3,-15,-6,14,-1,11,-13,-15,9,14,-5,-12,-15,-14,4,-9,6,5,-6,-13,9]));
