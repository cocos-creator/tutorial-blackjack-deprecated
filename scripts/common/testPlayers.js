var playerList = [
    {
        name: '燃烧吧，蛋蛋儿军',
        gold: 30000,
        image: 'circle_1.png'
    },
    {
        name: '地方政府',
        gold: 100000,
        image: 'circle_2.png'
    },
    {
        name: '手机超人',
        gold: 50000,
        image: 'circle_3.png'
    },
    {
        name: '哟哟，切克闹',
        gold: 15000,
        image: 'circle_4.png'
    },
    {
        name: '我的神啊',
        gold: 25000,
        image: 'circle_5.png'
    }
];

function getUrlByImageName(imageName) {
    return Fire.url.raw('textures/UI/user/' + imageName);
}

function getUrlByIndex(index) {
    return getUrlByImageName(playerList[index].image);
}

module.exports = {
    playerList: playerList,
    getUrlByIndex: getUrlByIndex,
    getUrlByImageName: getUrlByImageName
};
