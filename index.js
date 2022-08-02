function defangIPaddr(address) {
    var strArr = address.split("."), newSrt = "";
    strArr.forEach(function (a) {
        newSrt = newSrt + "".concat(newSrt == "" ? '' : "[.]") + a;
    });
    return newSrt;
}
;
console.log('defangIPaddr', defangIPaddr("255.100.50.0"));
