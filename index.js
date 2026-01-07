function isAnagram(s, t) {
    var a = s.split(''), b = t.split('');
    return a.sort().join('') === b.sort().join('');
}
;
console.log("containsDuplicate", isAnagram("rat", "car"));
