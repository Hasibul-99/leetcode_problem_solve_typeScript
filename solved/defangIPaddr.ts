function defangIPaddr(address: string): string {

    let strArr = address.split("."),
        newSrt = "";

    strArr.forEach(a => {
        newSrt = newSrt + `${newSrt == "" ? '' : "[.]"}` + a;
    })
    
    return newSrt;
};

console.log('defangIPaddr', defangIPaddr("255.100.50.0"));
