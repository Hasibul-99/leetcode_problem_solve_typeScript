function findKthPositive(arr, k) {
    var missArr = [];
    for (var i = 1; i < (arr[arr.length - 1] || 0) + k + 1; i++) {
        if (!arr.includes(i)) {
            missArr.push(i);
        }
    }
    console.log("missArr", missArr);
    return missArr[k - 1];
}
;
console.log("findKthPositive", findKthPositive([2, 3, 4, 7, 11], 5));
