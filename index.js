function vowelStrings(words, queries) {
<<<<<<< HEAD
=======
    var arr = [];
    for (var i = 0; i < words.length; i++) {
        var ele = words[i];
        if (["a", "e", "i", "o", "u"].includes(ele[0]) && ["a", "e", "i", "o", "u"].includes(ele[ele.length - 1])) {
            arr.push(1);
        }
        else {
            arr.push(0);
        }
    }
>>>>>>> 21d7850925150fd4732e8ab71bf483534957fec5
    var res = [];
    for (var i = 0; i < queries.length; i++) {
        var ele = queries[i];
        var total = 0;
        for (var j = ele[0]; j <= ele[1]; j++) {
<<<<<<< HEAD
            console.log("jjj", words[j]);
            var srt = words[j];
            // if ((srt.startsWith('a') && srt.endsWith('a')) || ( srt.startsWith('e') && srt.endsWith('e')) || 
            //     (srt.startsWith('i') && srt.endsWith('i')) || (srt.startsWith('o') && srt.endsWith('o')) || (srt.startsWith('u') && srt.endsWith('u'))) {
            //         total += 1;
            //     }
            if (["a", "e", "i", "o", "u"].includes(srt[srt.length - 1]) && ["a", "e", "i", "o", "u"].includes(srt[0])) {
                total += 1;
            }
=======
            total = total + arr[j];
>>>>>>> 21d7850925150fd4732e8ab71bf483534957fec5
        }
        res.push(total);
    }
    return res;
}
;
console.log("vowelStrings", vowelStrings(["aba", "bcb", "ece", "aa", "e"], [[0, 2], [1, 4], [1, 1]]));
