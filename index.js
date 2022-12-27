function maximumBags(capacity, rocks, additionalRocks) {
    var result = 0, length = capacity.length, content = [];
    for (var i = 0; i < length; i++) {
        var cap = capacity[i], rock = rocks[i];
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
    var row = content.sort(function (a, b) { return a - b; });
    for (var j = 0; j < row.length; j++) {
        var item = row[j];
        if (additionalRocks - item >= 0) {
            additionalRocks = additionalRocks - item;
            result += 1;
        }
        else {
            break;
        }
    }
    return result;
}
;
console.log("maximumBags", maximumBags([54, 18, 91, 49, 51, 45, 58, 54, 47, 91, 90, 20, 85, 20, 90, 49, 10, 84, 59, 29, 40, 9, 100, 1, 64, 71, 30, 46, 91], [14, 13, 16, 44, 8, 20, 51, 15, 46, 76, 51, 20, 77, 13, 14, 35, 6, 34, 34, 13, 3, 8, 1, 1, 61, 5, 2, 15, 18], 77));
