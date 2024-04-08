function countStudents(students, sandwiches) {
    var res = students.length;
    var cnt = {};
    for (var i = 0; i < students.length; i++) {
        cnt[students[i]] = (cnt[students[i]] || 0) + 1;
    }
    for (var j = 0; j < sandwiches.length; j++) {
        if (cnt[sandwiches[j]] > 0) {
            res -= 1;
            cnt[sandwiches[j]] -= 1;
        }
        else {
            return res;
        }
    }
    return res;
}
;
console.log("countStudents", countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
