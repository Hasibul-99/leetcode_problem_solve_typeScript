function isAnagram(s: string, t: string): boolean {
    if (s?.length !== t?.length) return false;

    let a = s.split("").sort(),
        b = t.split("").sort();

    let result = true;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) { 
            result = false;
            break; 
        }
    }

    return result;
};

console.log(isAnagram("anagran", "nagaram"));
