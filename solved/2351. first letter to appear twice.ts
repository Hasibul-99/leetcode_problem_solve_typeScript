function repeatedCharacter(s: string): string {

    if(s.length === 1) return s;
    let result = '';
    let arr : string[] = [];

    for (let i = 0; i < s.length; i++) {
        let index = arr.findIndex(e => e === s[i]);

        if (index === -1) {
            arr.push(s[i]);
        } else {
            result = s[i];
            break;
        }
    }

    return result;
};

console.log("repeatedCharacter", repeatedCharacter("abcdd"));
