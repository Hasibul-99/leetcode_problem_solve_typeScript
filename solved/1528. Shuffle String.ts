function restoreString(s: string, indices: number[]): string {
    let suffledArr = new Array(s.length).fill(0);
    for (let i = 0; i < s.length; i++) {
        suffledArr[i] = s[indices.indexOf(i)];
    }
    return suffledArr.join('');

};

console.log("restoreString", restoreString("codeleet", [4,5,6,7,0,2,1,3]));
