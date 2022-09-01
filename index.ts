// 205. Isomorphic Strings

function isIsomorphic(s: string, t: string): boolean {
    let first = s.split(''),
        sec = t.split('');

    let strU = first.filter(function (item, pos) {
            return first.indexOf(item) == pos;
        }),
        TexU = sec.filter(function (item, pos) {
            return sec.indexOf(item) == pos;
        });

    if (strU?.length === TexU?.length) return true;
    else return false;
};

console.log("isIsomorphic", isIsomorphic("egg", "add"));
