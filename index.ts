function minMovesToSeat(seats: number[], students: number[]): number {
    const s: number[] = seats.sort((a, b) => a - b);
    const st: number[] = students.sort((a, b) => a - b);
    let res: number = 0;

    // Determine the number of iterations based on the minimum of seats and students
    const iterations = Math.min(s.length, st.length);

    for (let i = 0; i < iterations; i++) {
        res += Math.abs(s[i] - st[i]);
    }

    return res;
};

console.log('====================================');
console.log(minMovesToSeat([12,14,19,19,12], [19,2,17,20,7]));
console.log('====================================');