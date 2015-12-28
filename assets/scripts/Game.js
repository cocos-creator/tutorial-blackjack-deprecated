var players = require('PlayerData').players;

var Game = cc.Class({
    extends: cc.Component,

    properties: {
        playerAnchors: {
            default: [],
            type: cc.Node
        },
        playerPrefab: {
            default: null,
            type: cc.Prefab
        },
        inGameUI: {
            default: null,
            type: cc.Node
        },
        assetMng: {
            default: null,
            type: cc.Node
        },
        audioMng: {
            default: null,
            type: cc.Node
        },
        turnDuration: 0,
        betDuration: 0
    },

    statics: {
      instance: null
    },

    // use this for initialization
    onLoad: function () {
        Game.instance = this;
        this.inGameUI = this.inGameUI.getComponent('InGameUI');
        this.assetMng = this.assetMng.getComponent('AssetMng');
        this.audioMng = this.audioMng.getComponent('AudioMng');
        this.inGameUI.init(this.betDuration);
        this.layoutPlayers();

        // test
        this.inGameUI.startCountdown();

        //
        this.audioMng.playMusic();
    },

    layoutPlayers: function () {
        for (var i = 0; i < 5; ++i) {
            var player = cc.instantiate(this.playerPrefab);
            var anchor = this.playerAnchors[i];
            var switchSide = (i >= 2);
            anchor.addChild(player);
            player.position = cc.p(0, 0);

            var playerInfoPos = cc.find('anchorPlayerInfo', anchor).getPosition();
            var stakePos = cc.find('anchorStake', anchor).getPosition();
            player.getComponent('Player').init(players[i], playerInfoPos, stakePos, this.turnDuration, switchSide);
        }
    },

    // called every frame
    update: function (dt) {

    },
});
