function reverseWords(s: string): string {
    let str = "";

    if (s) {
        let q = s.trim().split(" ").reverse(); //.join("");

        q.forEach((item, index) => {
            if (item) {
                str = str + item + `${(q.length !== index + 1) ? ' ' : ''}`;
            }
        })
    }

    return str;
};

console.log("reverseWords =>", reverseWords("a good   example"));
