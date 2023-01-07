function canCompleteCircuit(gas, cost) {
    var lan = gas.length, tank = 0, total = 0, start = 0;
    for (var i = 0; i < lan; i++) {
        var g = gas[i], c = cost[i];
        tank += (g - c);
        if (tank < 0) {
            start = i + 1;
            total += tank;
            tank = 0;
        }
    }
    ;
    return tank + total >= 0 ? start : -1;
}
;
console.log("canCompleteCircuit", canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]));
