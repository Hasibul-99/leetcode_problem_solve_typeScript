function longestPalindrome(s: string): number {
    if (!s?.length) return 0; 

    let counts = {},
        total = 0,
        odds: any[number] = [];

    for (let i = 0; i < s.length; i++) {
        const ele = s[i];
        
        if (counts[ele]) {
            counts[ele] += 1;
        } else {
            counts[ele] = 1;
        }
    };

    console.log("counts", counts);

    for (var key of Object.keys(counts)) {
        if ((counts[key] % 2) === 0) {
            total = total + (counts[key]);
        } else {
            let data = {
                key: key,
                val: counts[key]
            };
            odds.push(counts[key]);
        }
    }

    console.log("oddCounts", odds);
    let maximum = Math.max(...odds);
    let minimum = Math.min(...odds);

    console.log("maximum", maximum);
    console.log("minimum", minimum);
    let counter = true;

    odds.forEach(odd => {
        if (minimum === 1) {
            if (odd === 1) {
                if (counter) {
                    total = total + 1;
                    counter = false;
                } 
            } else {
                total = total + (odd -1);
            }
        } else {
            if( odd === maximum && counter) {
                total = total + maximum;
                counter = false;
            } else {
                total = total + (odd -1);
            }
        }
    });
    

    return total;
};

console.log("longestPalindrome", longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
