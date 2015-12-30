cc.Class({
    extends: cc.Component,

    properties: {
        anim: {
            default: null,
            type: cc.Animation
        }
    },

    // use this for initialization
    play: function () {
        this.anim.play('chip_toss');
    },
});
