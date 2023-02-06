function maxCount(banned: number[], n: number, maxSum: number): number {
    let arr : number[] = [];
    
    for (let i = 1; i <= n; i++) {
        if (!banned.includes(i)) {
            let total = arr.length ? arr.reduce((total, val) => (total || 0) + val) : 0;
            
            if (total + i <= maxSum) {
                arr.push(i);
            } 
        }
    }
    
    console.log('aa', arr);
    

    return arr.length;
};

console.log("maxCount", maxCount([11], 7, 50));
