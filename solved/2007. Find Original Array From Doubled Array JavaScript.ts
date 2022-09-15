// 2007. Find Original Array From Doubled Array JavaScript / typeScript 

function findOriginalArray(changed: number[]): number[] {
    if ((changed.length %2) !== 0) return [];

    let result : number[] = [],
        q : number[] = [];

        changed.sort(function(a, b){return a - b});
    
        changed.forEach(num => {
            if (q.length && num === q[0]) {
                q.shift();
            } else {
                q.push(num * 2);
                result.push(num);
            }
        });

        console.log("result",result);
        console.log("q", q);
        
        
    return q.length ? [] : result;
};


console.log("findOriginalArray", findOriginalArray([6,3,0,1]));
