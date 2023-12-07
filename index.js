function largestOddNumber(num) {
    var oddIdx = -1;
    for (var i = num.length - 1; i >= 0; i--) {
        if (Number(num[i]) % 2 === 1) {
            oddIdx = i;
            break;
        }
        ;
    }
    return oddIdx === -1 ? "" : num.slice(0, oddIdx + 1);
}
;
console.log("largestOddNumber", largestOddNumber("4206"));
