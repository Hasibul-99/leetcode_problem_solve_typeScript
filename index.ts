function countSeniors(details: string[]): number {
    let res: number = 0,
        maxAge: number = 0;
    
    for (let i = 0; i < details.length; i++) {
        const age = parseInt(details[i].slice(11, 13));
        if (age > 60) {
            res++;
        }
    }

    return res;
};

console.log('====================================');
console.log("countSeniors", countSeniors(["5612624052M0130","5378802576M6424","5447619845F0171","2941701174O9078"]));
console.log('====================================');

// 7868190130 M 75 22