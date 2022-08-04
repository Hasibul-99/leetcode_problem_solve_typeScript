function groupAnagrams(strs: string[]): string[][] {
    let items: string[] = strs.sort(function (a, b) { return a.length - b.length });
    let empty = strs.filter(st => st === '');
    let arr: string[][] = []; 
    
    if(empty?.length) arr.push(empty);

    for (let index = 0; index < strs.length; index++) {
        let item = sortAlphabets(strs[index]);

        if (strs[index]) {
            let filter = items.filter(n => sortAlphabets(n) === item);

            for (let j = 0; j < filter.length; j++) {
                const element = filter[j];
                let index = strs.findIndex(s => s === element);
    
                if (index !== -1) {
                    items.splice(index, 1);
                }
            }
    
            arr.push(filter);
        }
    }

    // return items.length ? arr.concat([items]) : arr;
    if (items.length) {
        items.forEach(n => {
            if(n) arr.push([n]);
        });

        return arr.sort(function (a, b) { return a.length - b.length });
    } else return arr.sort(function (a, b) { return a.length - b.length });
};

var sortAlphabets = function (text) {
    return text.split('').sort().join('');
};

console.log("strStr", groupAnagrams(["stop", "pots", "reed", "", "tops", "deer", "opts", ""]));

// 49. Group Anagrams
