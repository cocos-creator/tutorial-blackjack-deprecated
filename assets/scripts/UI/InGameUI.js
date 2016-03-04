var Game = require('Game');

cc.Class({
    extends: cc.Component,

    properties: {
        panelChat: cc.Node,
        panelSocial: cc.Node,
        betStateUI: cc.Node,
        gameStateUI: cc.Node,
        resultTxt: cc.Label,
        betCounter: cc.ProgressBar,
        btnStart: cc.Node,
        labelTotalChips: cc.Label
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
