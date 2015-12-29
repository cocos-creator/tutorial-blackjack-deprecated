var Game = require('Game');

cc.Class({
    extends: cc.Component,

    properties: {
        panelChat: {
            default: null,
            type: cc.Node
        },
        panelSocial: {
            default: null,
            type: cc.Node
        },
        betStateUI: {
            default: null,
            type: cc.Node
        },
        gameStateUI: {
            default: null,
            type: cc.Node
        },
        resultStateUI: {
            default: null,
            type: cc.Node
        },
        resultTxt: {
            default: null,
            type: cc.Label
        },
        betCounter: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    init: function (betDuration) {
        this.panelChat.active = false;
        this.panelSocial.active = false;
        this.resultTxt.active = false;
        this.betStateUI.active = true;
        this.gameStateUI.active = false;
        this.resultStateUI.active = false;
        this.betDuration = betDuration;
        this.progressTimer = this.initCountdown();
        // this.startCountdown();
    },

    initCountdown: function () {
        var countdownUrl = Game.instance.assetMng.texBetCountdown.getTexture().url;
        this.sgCountdown = new _ccsg.Sprite(countdownUrl);
        this.sgCountdown.setColor(cc.Color.BLACK);

        var progressTimer = new cc.ProgressTimer(this.sgCountdown);
        progressTimer.setName('progressTimer');
        progressTimer.setMidpoint(cc.p(0.5, 0.5));
        progressTimer.setType(cc.ProgressTimer.Type.RADIAL);
        this.betCounter._sgNode.addChild(progressTimer);
        progressTimer.setPosition(cc.p(0, -131.5));
        progressTimer.setPercentage(100);

        return progressTimer;
    },

    startCountdown: function() {
        if (this.progressTimer) {
            var fromTo = cc.progressFromTo(this.betDuration, 100, 0);
            this.progressTimer.runAction(fromTo);
        }
    },

    resetCountdown: function() {
        if (this.progressTimer) {
            this.progressTimer.stopAllActions();
            this.progressTimer.setPercentage(100);
        }
    },

    toggleChat: function () {
        this.panelChat.active = !this.panelChat.active;
    },

    toggleSocial: function () {
        this.panelSocial.active = !this.panelSocial.active;
    },

    // called every frame
    update: function (dt) {

    },
});
