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
        }
    },

    // use this for initialization
    onLoad: function () {
        this.panelChat.active = false;
        this.panelSocial.active = false;
        this.resultTxt.active = false;
        this.betStateUI.active = true;
        this.gameStateUI.active = false;
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
