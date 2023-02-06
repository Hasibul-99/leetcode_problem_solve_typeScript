function vowelStrings(words, queries) {
    var res = [];
    for (var i = 0; i < queries.length; i++) {
        var ele = queries[i];
        var total = 0;
        for (var j = ele[0]; j <= ele[1]; j++) {
            console.log("jjj", words[j]);
            var srt = words[j];
            // if ((srt.startsWith('a') && srt.endsWith('a')) || ( srt.startsWith('e') && srt.endsWith('e')) || 
            //     (srt.startsWith('i') && srt.endsWith('i')) || (srt.startsWith('o') && srt.endsWith('o')) || (srt.startsWith('u') && srt.endsWith('u'))) {
            //         total += 1;
            //     }
            if (["a", "e", "i", "o", "u"].includes(srt[srt.length - 1]) && ["a", "e", "i", "o", "u"].includes(srt[0])) {
                total += 1;
            }
        }
        res.push(total);
    }
    return res;
}
;
console.log("vowelStrings", vowelStrings(["aba", "bcb", "ece", "aa", "e"], [[0, 2], [1, 4], [1, 1]]));
