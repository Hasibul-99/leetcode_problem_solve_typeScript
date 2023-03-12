function minEatingSpeed(piles: number[], h: number): number {
    let left = 1,
        right = Math.max(...piles),
        ans = 0;

    while(left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let time = getTime(mid, piles);

        if (time <= h) {
            ans = mid;
            right = mid -1;
        } else {
            left = mid + 1;
        }

        console.log({left, right, ans, mid});
            
    };

    return ans;
};

const getTime = (value, piles) => {

    let total = 0;

    piles.forEach(item => {
        total = total + Math.ceil(item/value);
    })

    return total

}

console.log("minEatingSpeed", minEatingSpeed([30,11,23,4,20], 5));
