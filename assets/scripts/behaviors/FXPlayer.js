var animData = [
    {
        name: "BLACK JACK_",
        count: 22,
        startIdx: 1,
        delay: 0.067
    },
    {
        name: "BUST_",
        count: 10,
        startIdx: 1,
        delay: 0.067
    }
];

cc.Class({
    extends: cc.Component,
    onLoad: function() {
        this.animation = this.node.getComponent('cc.Animation');
    },
    playBlackJack: function() {
        this.node.active = true;
        this.animation.play('blackjack');
    },
    playBust: function() {
        this.node.active = true;
        this.animation.play('bust');
    },
    _onPlayEnd: function() {
        var animName = this.animation.currentClip.name;
        this.animation.getAnimationState(animName).isPlaying();
        this.node.active = false;
    }
});
