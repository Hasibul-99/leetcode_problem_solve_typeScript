function isNumber(s) {
    var inE = s.toLowerCase().includes('e');
    if (inE) {
        var str = s.toLowerCase();
        var count = str.split("e").length - 1;
        if (count === 1) {
            var dev = str.split('e'), fir = dev[0], sec = dev[1];
            // && Number.isNaN(Number(fir)) && Number.isNaN(Number(sec))
            if (fir && sec && (Number(fir) || Number(fir) === 0) && (Number(sec) || Number(sec) === 0) &&
                typeof Number(fir) === 'number' && typeof Number(sec) === 'number') {
                var secDot = sec.split(".").length - 1;
                if (secDot)
                    return false;
                else
                    return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else {
        var num = Number(s);
        if (num !== 0 && (Number.isNaN(num) || Number.isNaN((num / num)))) {
            return false;
        }
        else {
            if (num === 0)
                return true;
            else
                return num && typeof num === 'number' ? true : false;
        }
    }
}
;
console.log("singleNumber", isNumber("4e+"));
