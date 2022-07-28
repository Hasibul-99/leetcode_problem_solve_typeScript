function isPalindrome(x: number): boolean {
    
    let a = x.toString(),
        re = a.split('').reverse().join("");

    if (a === re) return true;
    else return false;
};

console.log(isPalindrome(101));
