cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function () {
        this.anim = this.getComponent(cc.Animation);
        // this.playFX('blackjack');
    },

    playFX: function (name) { // name can be 'blackjack' or 'bust'
        this.anim.play(name);
    },

    hideFX: function () {
        // this.anim.stop();
        console.log('hide');
        this.node.active = false;
    },
});