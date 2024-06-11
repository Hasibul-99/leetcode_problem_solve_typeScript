function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    let arr: number[] = [];

    var notMatch = arr1.filter(function(item) {
        return !arr2.includes(item);
      }).sort((a,b) => a -b)
    arr2.forEach(i => {
        let values = arr1.filter(d => d === i);
        arr = arr.concat(values);
    })

    return arr.concat(notMatch);
};

console.log("relativeSortArray", relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));
