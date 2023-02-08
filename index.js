function numJewelsInStones(jewels, stones) {
    // let total = 0;
    // for (let i = 0; i < jewels.length; i++) {
    //     let filter = stones.split("").filter(s => s === jewels[i]);
    //     total = total + filter.length;
    // }
    // return total;
    var obj = {};
    for (var i = 0; i < stones.length; i++) {
        obj[stones[i]] = (obj[stones[i]] || 0) + 1;
    }
    var res = 0;
    for (var i = 0; i < jewels.length; i++) {
        res = res + (obj[jewels[i]] || 0);
    }
    return res;
}
;
console.log("numJewelsInStones", numJewelsInStones("aA", "aAAbbbb"));
