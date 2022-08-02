function maxProfit(prices: number[]): number {
    if (!prices?.length) return 0;

    let lastIndex = prices.length -1,
        sellIndex = prices.length -1,
        profit = 0;

    for (let i = lastIndex; i >= 0; i--) {
        let bValue = prices[i],
            sValue = prices[sellIndex];
        
        if (bValue - sValue >= 0) {
            sellIndex = i
        } else {
            let price = sValue - bValue;
            profit = Math.max(price, profit);
        }
    }

    return profit;
};

console.log("maxProfit", maxProfit([7,1,5,3,6,4]));