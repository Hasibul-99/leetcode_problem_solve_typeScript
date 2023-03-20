function canPlaceFlowers(flowerbed, n) {
    for (var i = 0; i < flowerbed.length && n !== 0; i++) {
        // console.log("--", flowerbed[i]);
        if (flowerbed[i] === 0 && !flowerbed[i - 1] && !flowerbed[i + 1]) {
            n--;
            i++;
        }
    }
    return !n;
}
;
console.log("canPlaceFlowers", canPlaceFlowers([1, 0, 0, 0, 1], 1));
