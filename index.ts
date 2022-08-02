function isValid(s: string): boolean {
    let data = [
        {s: '(', n: ')'},
        {s: '{', n: '}'},
        {s: '[', n: ']'}
    ];

    let str = s.split(''),
        result = true;

    for (let i = 0; i < str.length; i++) {
        if ((i+1)% 2 === 0 ) {
            let s = str[i -1],
                n = str[i];
                
            let findIdx = data.findIndex(item => item.s === s && item.n === n);

            if (findIdx === -1) {
                result = false;
                break;
            }
        }
    }
    
    return result;
};


console.log("kthSmallest", isValid("(]"));

// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/submissions/