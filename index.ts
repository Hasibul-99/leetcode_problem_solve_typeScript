function buyChoco(prices: number[], money: number): number {
    let sort = prices.sort((a,b) => a -b);

    let totalBuy = sort[0] + sort[1];

    let mon = money - totalBuy;

    return mon < 0 ? money : mon;
};

console.log("buyChoco", buyChoco([3,2,3], 3));
