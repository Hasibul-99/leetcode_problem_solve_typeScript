function insert(intervals: number[][], newInterval: number[]): number[][] {
    const result : number[][] = [];
    
    for (let i = 0; i < intervals.length; i++) {
        let interval = intervals[i];
        
        // If overlaps
        if (Math.max(interval[0], newInterval[0]) <= Math.min(interval[1], newInterval[1])) {
            newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])];
            continue;
        }
        
        // If lower
        if (interval[0] > newInterval[1]) {
            console.log("ee", newInterval, ...intervals.slice(i))
            result.push(newInterval, ...intervals.slice(i));
            return result;
        }
        
        result.push(interval);
    }
    
    result.push(newInterval);
    return result;
};

console.log("insert", insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])); //[[1,2],[3,10],[12,16]]
