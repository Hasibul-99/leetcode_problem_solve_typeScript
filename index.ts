function dailyTemperatures(temperatures: number[]): number[] {
    let arr : number[] = Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                arr[i] = j-i;
                break;
            }
        }
    }

    return arr;
};

console.log("dailyTemperatures", dailyTemperatures([30,60,90]));
