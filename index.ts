function maxProfit(prices: number[]): number {
    let sm = 0,
        max = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i + 1]) {
            if ((!sm || !(sm < prices[i])) && prices[i] !== 0) {
                sm = prices[i];
            }
        }
    }

    let index = prices.findIndex(e => e === sm);

    if (index !== -1) {
        for (let j = index; j < prices.length; j++) {
            if (!max || prices[j] > max) {
                max = prices[j]
            }
        }
    }
    

    console.log("sm", sm);
    console.log("max",max);
    
    

    return max < sm ? 0 : max - sm ;
};

console.log("maxProfit", maxProfit([3,2,6,5,0,3]));

// 121. Best Time to Buy and Sell Stock
