function minimumSteps(s: string): number {
    let step: number = 0,
        count1 = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            count1++;
        } else {
            console.log('count1',count1);
            
            step += count1;
        }
    }

    return step;
};

console.log("minimumSteps",minimumSteps("100"));
