function findTheArrayConcVal(nums) {
    var output = 0;
    var i = 0;
    var j = nums.length - 1;
    while (i <= j) {
        output += Number(i === j ? nums[i] : "".concat(nums[i]) + "".concat(nums[j]));
        i++;
        j--;
    }
    ;
    return output;
}
;
console.log("findTheArrayConcVal", findTheArrayConcVal([7, 52, 2, 4]));
