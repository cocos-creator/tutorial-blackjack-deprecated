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
        resultTxt: {
            default: null,
            type: cc.Label
        },
        betCounter: {
            default: null,
            type: cc.ProgressBar
        },
        btnStart: {
            default: null,
            type: cc.Node
        },
        labelTotalChips: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    init: function (betDuration) {
        this.panelChat.active = false;
        this.panelSocial.active = false;
        this.resultTxt.enabled = false;
        this.betStateUI.active = true;
        this.gameStateUI.active = false;
        // this.resultStateUI.active = false;
        this.btnStart.active = false;
        this.betDuration = betDuration;
        this.betTimer = 0;
        this.isBetCounting = false;
    },

    startCountdown: function() {
        if (this.betCounter) {
            this.betTimer = 0;
            this.isBetCounting = true;
        }
    },

    resetCountdown: function() {
        if (this.betCounter) {
            this.betTimer = 0;
            this.isBetCounting = false;
            this.betCounter.progress = 0;
        }
    },

    showBetState: function () {
        this.betStateUI.active = true;
        this.gameStateUI.active = false;
        this.btnStart.active = false;
    },

    showGameState: function () {
        this.betStateUI.active = false;
        this.gameStateUI.active = true;
        this.btnStart.active = false;
    },

    showResultState: function () {
        this.betStateUI.active = false;
        this.gameStateUI.active = false;
        this.btnStart.active = true;
    },

    toggleChat: function () {
        this.panelChat.active = !this.panelChat.active;
    },

    toggleSocial: function () {
        this.panelSocial.active = !this.panelSocial.active;
    },

    // called every frame
    update: function (dt) {
        if (this.isBetCounting) {
            this.betCounter.progress = this.betTimer/this.betDuration;
            this.betTimer += dt;
            if (this.betTimer >= this.betDuration) {
                this.isBetCounting = false;
                this.betCounter.progress = 1;
            }
        }
    },
});
