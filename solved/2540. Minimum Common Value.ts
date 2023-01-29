function getCommon(nums1: number[], nums2: number[]): number {

    let numsSort = nums1.sort((a,b) => a -b),
        res = -1;

        console.log("numsSort", numsSort);
        

    for (let i = 0; i < numsSort.length; i++) {
        let ele = numsSort[i];

        console.log("ele", ele);        
        let idx = nums2.findIndex(item => item === ele);

        console.log("idx", idx);
        

        if (idx !== -1) {
            res = ele;
            break;
        }
    }

    return res;
    
};

console.log("getCommon", getCommon([3,4,5,10,12,15,16,16,25,48,51,69,74,74,78,78,78,82,82,88], [3,8,9,10,13,16,24,25,27,29,34,39,55,62,70,80,83,87,92,94]));
