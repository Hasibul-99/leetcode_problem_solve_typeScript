function maximumBags(capacity: number[], rocks: number[], additionalRocks: number): number {
    let result = 0,
        length = capacity.length,
        content: number[] = [];


    for (let i = 0; i < length; i++) {
        let cap = capacity[i],
        rock = rocks[i];
        
        // if (cap === rock) {
        //     result += 1;
        // } else if (additionalRocks === 0) {
        //     // break;
        // } else {
        //     if ( additionalRocks - (cap - rock) >= 0) {
        //         additionalRocks = additionalRocks - (cap - rock);
        //         result += 1;
        //     }
        // }      

        content.push(cap - rock);  
    }

    let row = content.sort((a,b) => a - b);

    for (let j = 0; j < row.length; j++) {
        let item = row[j];

        if (additionalRocks - item >= 0) {
            additionalRocks = additionalRocks - item; 
            result += 1;
        } else {
            break;
        }
    }
    
    return result;
};

console.log("maximumBags", maximumBags([54,18,91,49,51,45,58,54,47,91,90,20,85,20,90,49,10,84,59,29,40,9,100,1,64,71,30,46,91], [14,13,16,44,8,20,51,15,46,76,51,20,77,13,14,35,6,34,34,13,3,8,1,1,61,5,2,15,18], 77));
