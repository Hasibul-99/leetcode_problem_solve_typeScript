function minMovesToSeat(seats, students) {
    var s = seats.sort(function (a, b) { return a - b; });
    var st = students.sort(function (a, b) { return a - b; });
    var res = 0;
    // Determine the number of iterations based on the minimum of seats and students
    var iterations = Math.min(s.length, st.length);
    for (var i = 0; i < iterations; i++) {
        res += Math.abs(s[i] - st[i]);
    }
    return res;
}
;
console.log('====================================');
console.log(minMovesToSeat([12, 14, 19, 19, 12], [19, 2, 17, 20, 7]));
console.log('====================================');
