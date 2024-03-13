function pivotInteger(n: number): number {
    const getSum = (x: number) => {
        return (x*(x+1))/2;
    };

    let ans = -1;
    for (let i = 1; i <= n; i++) {
        let sum1 = getSum(i);
        let sum2 = getSum(n) - getSum(i-1);

        if (sum1 === sum2) {
            ans = i;
            break;
        }
    }

    return ans;
};

console.log("pivotInteger",pivotInteger(8));
