function winnerOfGame(colors: string): boolean {
    let ATotal = 0,
        Btotal = 0;
    if (colors.length <= 2) return false;

    for (let i = 1; i < colors.length - 1; i++) {
        if (colors[i - 1] === "A" && colors[i] === "A" && colors[i + 1] === "A") {
            ATotal = ATotal + 1;
        }

        if (colors[i - 1] === "B" && colors[i] === "B" && colors[i + 1] === "B") {
            Btotal = Btotal + 1;
        }
    };

    return ATotal > Btotal ? true : false;
};

console.log(winnerOfGame("AAABABB"));
