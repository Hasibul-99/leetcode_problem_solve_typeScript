function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let items = [...nums1, ...nums2].sort(function(a, b){return a - b});
    console.log("items", items);

    if (items.length %2 === 0) {
        let floor = items[Math.floor(items.length /2) - 1],
            cling = items[Math.round(items.length /2)]
        
        return (floor + cling) / 2;
    } else {
        return items[Math.floor(items.length /2)];
    }
};

console.log("findMedianSortedArrays", findMedianSortedArrays([1,2], [3,4]));
