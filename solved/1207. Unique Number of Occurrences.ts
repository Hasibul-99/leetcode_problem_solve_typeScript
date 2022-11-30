function uniqueOccurrences(arr: number[]): boolean {
    let numObj = {};
    for (let num of arr) {
        if (numObj[num]) {
            numObj[num] = numObj[num] + 1;
        } else {
            numObj[num] = 1;
        }
    }
    let valuesArr = Object.values(numObj).sort();
    let j = 0;
    for (let i = 1; i < valuesArr.length; i++) {
        if (valuesArr[j] === valuesArr[i]) {
            return false;
        }
        j++;
    }
    return true;
};

console.log("uniqueOccurrences", uniqueOccurrences([1,2,2,1,1,3]));
