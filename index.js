function halvesAreAlike(s) {
    var h = s.length / 2, a = s.slice(0, h), b = s.slice(h, s.length), vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'], aArr = {}, bArr = {}, aTotal = 0, bTotal = 0;
    for (var i = 0; i < vowels.length; i++) {
        var item = vowels[i];
        aArr[item] = a.split(item).length - 1;
        bArr[item] = b.split(item).length - 1;
        aTotal += a.split(item).length - 1;
        bTotal += b.split(item).length - 1;
    }
    // console.log({aArr, bArr});
    // if (aArr.a === bArr.a && aArr.e === bArr.e && aArr.i === bArr.i && aArr.o === bArr.o && aArr.u === bArr.u && aArr.A === bArr.A && aArr.E === bArr.E && aArr.I === bArr.I && aArr.O === bArr.O && aArr.U === bArr.U) {
    //     return true;
    // } else return false;
    return aTotal === bTotal;
}
;
console.log("halvesAreAlike", halvesAreAlike("AbCdEfGh"));
