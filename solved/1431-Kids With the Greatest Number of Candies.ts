function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let max = Math.max(...candies),
        result : boolean[] = [];

    for (let i = 0; i < candies.length; i++) {
        let can = candies[i] + extraCandies;
        let value = can >= max ? true : false;
        
        result.push(value)
    }

    return result;
};

console.log("kidsWithCandies",kidsWithCandies([2,3,5,1,3], 3));