cc.Class({
    extends: cc.Component,

    // use this for initialization
    init: function () {
        this.anim = this.getComponent(cc.Animation);
        this.sprite = this.getComponent(cc.Sprite);
        // this.playFX('blackjack');
    },

    show: function (show) {
        this.sprite.enabled = show;
    },

    playFX: function (name) { // name can be 'blackjack' or 'bust'
        this.anim.play(name);
    },

    hideFX: function () {
        // this.anim.stop();
        console.log('hide');
        // this.node.active = false;
        this.sprite.enabled = false;
    },
});