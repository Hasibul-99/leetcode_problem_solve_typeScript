function letterCombinations(digits: string): string[] {
    if(digits.length === 0){
        return []
    }
    
    let mapping: { [x: string]: string[] } = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    };

    let res: string[] = mapping[digits[0]];

    for (let i = 1; i < digits.length; i++) {
        let temp: string[] = [];

        for (let j = 0; j < res.length; j++) {
            
            for(const letter of mapping[digits[i]]) {
                temp.push(res[j].concat(letter))
            }
        }

        res = temp;
    }

    return res;
};

console.log("letterCombinations", letterCombinations("23"));
