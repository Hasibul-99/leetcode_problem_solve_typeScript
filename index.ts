function chunk(arr: any[], size: number): any[][] {
    let res : any[][] = [];
    let lan = arr.length,
        start = 0,
        end = size;

    while(lan > 0) {
        let val = arr.slice(start, end)
        res.push(val);

        start = end;
        end = end + size;
        lan = lan - size;
    }

    return res;
};

console.log("chunk", chunk([1,9,6,3,2], 1));

