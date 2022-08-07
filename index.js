function addBinary(a, b) {
    var x = parseInt(a, 2);
    var y = parseInt(b, 2);
    console.log("x", x);
    console.log("y", y);
    var z = x + y;
    console.log("z", z);
    return z.toString(2);
}
;
console.log("repeatedCharacter", addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"));
