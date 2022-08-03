function isValid(s: string): boolean {
    let data = [
        {s: '(', n: ')'},
        {s: '{', n: '}'},
        {s: '[', n: ']'}
    ];

    let str = s.split(''),
        result = false;

    // for (let i = 0; i < str.length; i++) {
    //     if ((i+1)% 2 === 0 ) {
    //         let s = str[i -1],
    //             n = str[i];
                
    //         let findIdx = data.findIndex(item => item.s === s && item.n === n);

    //         if (findIdx === -1) {
    //             result = false;
    //             break;
    //         }
    //     }
    // }

    let store = [],
        lastStr = [],
        conti = true;

    while (conti) {
        abc();
        if (lastStr.toString() === str.toString() ) {
            conti = false;

            console.log("lastStr",lastStr);
            

            if(str.length === 0) result = true;
        }
    }

    function abc() {
        for (let i = 0; i < str.length -1; i++) {
            let findIdx = data.findIndex(item => item.s === str[i] && item.n === str[i +1])
    
            if (findIdx !== -1) {
                str.splice(i, 1);
                str.splice(i + 1, 1);
                this.lastStr = str;
            }

            console.log("str", str);
            
            if (i === str.length) {
                abc()
            }
        }
    }

    
    return result;
};


console.log("kthSmallest", isValid("()"));

// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/submissions/