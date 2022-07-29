function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) return strs[0];

    let result = "";
    let ss = strs.reduce((a, b) => a.length <= b.length ? a : b);
        strs.splice(strs.findIndex(s => s === ss), 1);
    
    let text = ss;

    while (text) {
        for (let i = 0; i < strs.length; i++) {
            if (!strs[i].startsWith(text)) {
                text = text.slice(0, text.length-1);
                break;
            }

            if(i === strs.length - 1) {
                result = text;
                text = "";
            }
        }
    }
    
    return result;
};

console.log("longestCommonPrefix", longestCommonPrefix(["reflower","flow","flight"]));

