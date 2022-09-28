function finalValueAfterOperations(operations: string[]): number {

    let items = {
        "++X": 1,
        "X++": 1,
        "--X": -1,
        "X--": -1
    },
    total = 0;
    
    operations.forEach(opera => {
        total = total + items[opera];
    })


    return total;

};

console.log("finalValueAfterOperations", finalValueAfterOperations(["++X","++X","X++"]));
