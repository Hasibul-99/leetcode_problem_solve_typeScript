function mostWordsFound(sentences) {
    var result = 0;
    sentences.forEach(function (sen) {
        console.log(sen);
        if (sen) {
            console.log("ere", sen.split(" ").length);
            var val = sen.split(" ").length;
            if (val > result)
                result = val;
        }
    });
    return result;
}
;
console.log("mostWordsFound", mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
