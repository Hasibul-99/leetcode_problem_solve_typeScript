function pickGifts(gifts: number[], k: number): number {
    for (let i = 0; i < k; i++) {
        let max = Math.max(...gifts);

        let maxIdx = gifts.findIndex(i => i === max);
        gifts[maxIdx] = parseInt(Math.sqrt(max).toString());
    }

    return  gifts.reduce((total, num) => total + num)
};

console.log("pickGifts", pickGifts([25,64,9,4,100], 4));
