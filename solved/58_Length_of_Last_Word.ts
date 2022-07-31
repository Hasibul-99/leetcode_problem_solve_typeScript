function lengthOfLastWord(s: string): number {
    let text = s.trim();
    if (!text) return 0;

    let n = text.split(" ");
    let lastWorld =  n[n.length - 1];
    return lastWorld.length;
};

console.log("lengthOfLastWord", lengthOfLastWord("Hello World"));