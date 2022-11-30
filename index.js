function uniqueOccurrences(arr) {
    var numObj = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (numObj[num]) {
            numObj[num] = numObj[num] + 1;
        }
        else {
            numObj[num] = 1;
        }
    }
    var valuesArr = Object.values(numObj).sort();
    var j = 0;
    for (var i = 1; i < valuesArr.length; i++) {
        if (valuesArr[j] === valuesArr[i]) {
            return false;
        }
        j++;
    }
    return true;
}
;
console.log("uniqueOccurrences", uniqueOccurrences([1, 2, 2, 1, 1, 3]));
