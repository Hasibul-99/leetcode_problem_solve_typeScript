function maximumWealth(accounts: number[][]): number {
    let max = 0;

    accounts.forEach(acc => {
        let amount = acc.reduce((total, num) => total + num);
        max = Math.max(max, amount);
    });

    return max;
};

console.log(maximumWealth([[1,2,3],[3,2,1]]));
