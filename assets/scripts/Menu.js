cc.Class({
    extends: cc.Component,

    properties: {
        audioMng: cc.Node
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
