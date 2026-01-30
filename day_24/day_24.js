var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length && n > 0; i++) {
        if (
            flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
        ) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n === 0;
};
