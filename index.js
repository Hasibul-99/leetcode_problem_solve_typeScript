function finalValueAfterOperations(operations) {
    var items = {
        "++X": 1,
        "X++": 1,
        "--X": -1,
        "X--": -1
    }, total = 0;
    operations.forEach(function (opera) {
        total = total + items[opera];
    });
    return total;
}
;
console.log("finalValueAfterOperations", finalValueAfterOperations(["++X", "++X", "X++"]));
