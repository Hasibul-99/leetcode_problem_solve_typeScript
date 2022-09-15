function mostWordsFound(sentences: string[]): number {
    let result = 0;
    
    sentences.forEach(sen => {
        console.log(sen);
        if (sen) {
            console.log("ere",sen.split(" ").length);
            
            let val = sen.split(" ").length;

            if (val > result) result = val;
        }
    });

    return result;
};

console.log("mostWordsFound", mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
