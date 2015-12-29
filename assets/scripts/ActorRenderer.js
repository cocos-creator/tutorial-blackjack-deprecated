var Game = require('Game');

cc.Class({
    extends: cc.Component,

    properties: {
        playerInfo: {
            default: null,
            type: cc.Node
        },
        stakeOnTable: {
            default: null,
            type: cc.Node
        },
        cardInfo: {
            default: null,
            type: cc.Node
        },
        spPlayerName: {
            default: null,
            type: cc.Sprite
        },
        labelPlayerName: {
            default: null,
            type: cc.Label
        },
        labelTotalStake: {
            default: null,
            type: cc.Label
        },
        spPlayerPhoto: {
            default: null,
            type: cc.Sprite
        },
        spCountdown: {
            default: null,
            type: cc.Sprite
        },
        labelStakeOnTable: {
            default: null,
            type: cc.Label
        },
        spChips: {
            default: [],
            type: cc.Sprite
        },
        labelCardInfo: {
            default: null,
            type: cc.Label
        },
        spCardInfo: {
            default: null,
            type: cc.Sprite
        },
        animFX: {
            default: null,
            type: cc.Animation
        }
    },

    onLoad: function () {
        this.playAnimFX('blackjack');
    },

    init: function ( playerInfo, playerInfoPos, stakePos, turnDuration, switchSide ) {
        this.sgCountdown = null;
        this.turnDuration = turnDuration;

        this.playerInfo.position = playerInfoPos;
        this.stakeOnTable.position = stakePos;
        this.labelPlayerName.string = playerInfo.name;
        this.updateTotalStake(playerInfo.gold);
        var photoIdx = playerInfo.photoIdx % 5;
        this.spPlayerPhoto.spriteFrame = Game.instance.assetMng.playerPhotos[photoIdx];
        this.animFX.node.active = false;

        this.progressTimer = this.initCountdown();

        // switch side
        if (switchSide) {
            this.spCardInfo.getComponent('SideSwitcher').switchSide();
            this.spPlayerName.getComponent('SideSwitcher').switchSide();
        }
    },

    initDealer: function () {
    },

    updateTotalStake: function (num) {
        this.labelTotalStake.string = '$' + num;
    },

    initCountdown: function () {
        var countdownUrl = Game.instance.assetMng.texCountdown.getTexture().url;
        this.sgCountdown = new _ccsg.Sprite(countdownUrl);

        var progressTimer = new cc.ProgressTimer(this.sgCountdown);
        progressTimer.setName('progressTimer');
        progressTimer.setMidpoint(cc.p(0.5, 0.5));
        progressTimer.setType(cc.ProgressTimer.Type.RADIAL);
        this.playerInfo._sgNode.addChild(progressTimer);
        progressTimer.setPosition(cc.p(0, 0));
        progressTimer.setPercentage(100);

        return progressTimer;
    },

    startCountdown: function() {
        if (this.progressTimer) {
            var fromTo = cc.progressFromTo(this.turnDuration, 100, 0);
            this.progressTimer.runAction(fromTo);
        }
    },

    resetCountdown: function() {
        if (this.progressTimer) {
            this.progressTimer.stopAllActions();
            this.progressTimer.setPercentage(100);
        }
    },

    playAnimFX: function (name) { // name can be 'blackjack' or 'bust'
        this.animFX.node.active = true;
        this.animFX.play(name);
        var duration = this.animFX.getAnimationState(name).duration;
        this.unschedule(this.hideAnimFX);
        this.scheduleOnce(this.hideAnimFX, duration);
    },

    hideAnimFX: function () {
        this.animFX.node.active = false;
    },

    // called every frame
    update: function (dt) {

    },
});
