const players = require('PlayerData').players;

cc.Class({
    extends: cc.Component,

    properties: {
        scrollView: cc.ScrollView,
        prefabRankItem: cc.Prefab,
        rankCount: 0
    },

    // use this for initialization
    onLoad: function () {
        this.content = this.scrollView.content;
        this.populateList();
    },

    populateList: function() {
        for (var i = 0; i < this.rankCount; ++i) {
            var playerInfo = players[i];
            var item = cc.instantiate(this.prefabRankItem);
            item.getComponent('RankItem').init(i, playerInfo);
            this.content.addChild(item);
        }
    },

    // called every frame
    update: function (dt) {

    },
});
