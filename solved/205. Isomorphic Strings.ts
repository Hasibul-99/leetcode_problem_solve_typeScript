// 205. Isomorphic Strings

function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    let sObj = {},
        tObj = {};

    for (let i = 0; i < s.length; i++) {
        if (sObj[s[i]] !== tObj[t[i]]) {
            return false;
        } else {
            sObj[s[i]] = i;
            tObj[t[i]] = i;
        }
        
    console.log({sObj, tObj});
    }

    
    return true;
};

console.log("isIsomorphic", isIsomorphic("bbbaaaba", "aaabbbba"));
