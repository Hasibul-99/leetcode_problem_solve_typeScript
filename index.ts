function reverseWords(s: string): string {
    console.log(s.split(' '));

    let res : string = ''
    
    s.split(' ').forEach(item => {
        res = res + item.split("").reverse().join('') + ' ';
    });

    return res.trim();
};


console.log("reverseWords", reverseWords("Let's take LeetCode contest"));
