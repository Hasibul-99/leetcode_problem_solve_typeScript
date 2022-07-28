function romanToInt(s: string): number {
    let data = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    },
    nData = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    };

    let total = 0,
        text: string = s;

    Object.keys(nData).forEach(function(key) {
        if(s.includes(key)) {
            total += nData[key];
            text = text.replace(key, "");
        }
    });

    text.split("").forEach(n => {
        total += data[n];
    })

    return total;

};

console.log(romanToInt("III"));
