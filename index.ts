function firstUniqChar(s: string): number {
    let res: number = -1;

    if (s.length === 1) return 0;
    for (let i = 1; i < s.length + 1; i++) {
        let arr = s.slice(i, s.length);
        let arr2 = s.slice(0, i -1);

        console.log(s[i-1], arr.includes(s[i-1]), arr2.includes(s[i-1]));
        
        if (!arr.includes(s[i-1]) && !arr2.includes(s[i-1])) {
            res = i-1;
            break;
        }
    }

    return res;
};

console.log("firstUniqChar", firstUniqChar("dddccdbba"));
