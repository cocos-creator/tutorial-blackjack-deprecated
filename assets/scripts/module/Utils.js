
// 返回尽可能不超过 21 点的最小和最大点数
function getMinMaxPoint (cards) {
    var hasAce = false;
    var min = 0;
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        if (card.point === 1) {
            hasAce = true;
        }
        min += Math.min(10, card.point);
    }
    var max = min;
    // 如果有 1 个 A 可以当成 11
    if (hasAce && min + 10 <= 21) {
        // （如果两个 A 都当成 11，那么总分最小也会是 22，爆了，所以最多只能有一个 A 当成 11）
        max += 10;
    }

    return {
        min: min,
        max: max
    };
}

function isBust (cards) {
    var sum = 0;
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        sum += Math.min(10, card.point);
    }
    return sum > 21;
}

var isMobile = function () {
    return cc.sys.isMobile;
};

module.exports = {
    isBust: isBust,
    getMinMaxPoint: getMinMaxPoint,
    isMobile: isMobile
};
