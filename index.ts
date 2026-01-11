function groupAnagrams(strs: string[]): string[][] {
    
    const map: Map<string, string[]> = new Map();

    for (const str of strs) {
        // const sorted = [...str].sort().join('');
        // if (map.has(sorted)) {
        //     map.get(sorted)!.push(str);
        // } else {
        //     map.set(sorted, [str]);
        // }

        const key = str.split('').sort().join('');
        if (map.has(key)) {
            map.get(key)!.push(str);
        } else {
            map.set(key, [str]);
        }

    }

    return Array.from(map.values());
};

console.log("containsDuplicate", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

