function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
}
;
console.log("containsDuplicate", containsDuplicate([1, 2, 3, 4]));
