function isAnagram(s: string, t: string): boolean {
    let a = s.split(''),
        b = t.split('');

    return a.sort().join('') === b.sort().join('');
};

console.log("containsDuplicate", isAnagram("rat", "car"));

