function maxIceCream(costs: number[], coins: number): number {
    let items = costs.sort((a, b) => a - b),
        res = 0;

    for (let i = 0; i < items.length; i++) {
        let price = items[i];

        if (price <= coins) {
            coins = coins - price;
            res += 1;
        } else {
            break;
        }
    }

    return res;
};

console.log("maxIceCream", maxIceCream([10,6,8,7,7,8], 5));
