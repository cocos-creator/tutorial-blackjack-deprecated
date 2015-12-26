cc.Class({
    extends: cc.Component,
    properties: {
        audioMng: {
            default: null,
            type: cc.Node
        }
    },
    onLoad: function() {
        this._registerButtons();
        this.audioMng = this.audioMng.getComponent('AudioMng');
        this.audioMng.playMusic();
    },
    loadGame: function() {
        cc.audioEngine.stopMusic();
        cc.director.loadScene( 'table' );
    }
});
