cc.Class({
    extends: cc.Component,

    properties: {
        audioMng: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {
        this.audioMng = this.audioMng.getComponent('AudioMng');
        this.audioMng.playMusic();
    },

    playGame: function () {
        cc.director.loadScene('table');
    },

    // called every frame
    update: function (dt) {

    },
});
