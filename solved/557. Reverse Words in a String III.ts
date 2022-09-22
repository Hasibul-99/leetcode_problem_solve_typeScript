function reverseWords(s: string): string {
    let arr = s.split(' ');
    let text = '';

    arr.forEach((a, i) => {
        text = text + a.split("").reverse().join("") + `${i === arr.length-1 ? '' : ' '}`;
    });

    return text;
};

console.log("reverseWords", reverseWords("Let's take LeetCode contest"));
