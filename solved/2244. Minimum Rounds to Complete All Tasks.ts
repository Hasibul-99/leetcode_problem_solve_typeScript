function minimumRounds(tasks: number[]): number {
    let items : any = {};
    let res : number = 0;

    for (let i = 0; i < tasks.length; i++) {
        items[tasks[i]] = (items[tasks[i]] || 0) + 1;
    }

    // console.log(items);

    for (const j in items) {
        let item = items[j];

        if (item === 1) {
            res = -1;
            break;
        } else {
            if (item%3 === 0) {
                res = res + item/3; 
            } else {
                res = res + parseInt((item/3).toString()) + 1;
            }
        }
    }
    
    return res;
};

console.log("minimumRounds", minimumRounds([2,2,3,3,2, 4,4,4,4,4]));
