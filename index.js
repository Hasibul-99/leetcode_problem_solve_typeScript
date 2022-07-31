function lengthOfLastWord(s) {
    var text = s.trim();
    if (!text)
        return 0;
    var n = text.split(" ");
    var lastWorld = n[n.length - 1];
    return lastWorld.length;
}
;
console.log("lengthOfLastWord", lengthOfLastWord("Hello World"));
