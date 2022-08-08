function isNumber(s: string): boolean {
    let inE = s.toLowerCase().includes('e');

    if (inE) {
        let str = s.toLowerCase();
        let count = str.split("e").length - 1;
        if (count === 1) {
            let dev = str.split('e'),
                fir = dev[0],
                sec = dev[1];

            // && Number.isNaN(Number(fir)) && Number.isNaN(Number(sec))
            
            if (fir && sec && (Number(fir) || Number(fir) === 0) && (Number(sec) || Number(sec) === 0) &&
                typeof Number(fir) === 'number' && typeof Number(sec) === 'number') {
                let secDot = sec.split(".").length - 1;
                
                if (secDot) return false;
                else return true;
            } else {
                return false
            }
        } else {
            return false;
        }
    } else {
        let num = Number(s);

        if (num !== 0 && (Number.isNaN(num) || Number.isNaN((num / num)))) {
            return false;
        } else {
            if (num === 0) return true;
            else return num && typeof num === 'number' ? true : false;
        }
    }
};

console.log("singleNumber", isNumber("4e+"));