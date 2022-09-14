function validMountainArray(arr: number[]): boolean {
    let result = true;
    let max = Math.max(...arr),
        index = arr.findIndex(a => a === max);

    if (index === 0) return false;
    if (index === arr.length -1) return false

    // console.log(max);
    // ====>
    for (let i = index; i < arr.length; i++) {
        let ele = arr[i],
            next = arr[i + 1];
        
        if (next && ele <= next) {

            console.log({ele, next});
            
            result = false;
            break;
        } 
    }

    // <====
    for (let j = index; j >= 0; j--) {
        let ele = arr[j],
            pre = arr[j - 1 ];

        // console.log("ele2", ele);

        if (pre && ele <= pre){
            console.log({ele, pre});
            
            result = false;
            break;
        }
    }
    
    return result;

};

console.log("validMountainArray", validMountainArray([1,3,2]));
