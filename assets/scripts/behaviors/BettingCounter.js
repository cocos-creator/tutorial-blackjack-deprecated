cc.Class({
    extends: cc.Component,
    properties: {
        counterSprite: {
            default: null,
            type: cc.Node
        },
        bettingDuration: 0
    },

    init: function() {
        this.counterSprite.removeFromParent();
        this.progressBar = new cc.ProgressTimer(this.counterSprite);
        this.progressBar.setType(cc.ProgressTimer.TYPE_RADIAL);
        this.progressBar.setPercentage(0);
        if (cc.sys.isNative) {
            this.progressBar.setReverseDirection(true);
        }
        else {
            this.progressBar.setReverseProgress(true);
        }
        this.addChild(this.progressBar);
        this.progressBar.setPosition(cc.p(0, 243));
    },

    startCountdown: function(bettingDuration) {
        var duration = bettingDuration || this.bettingDuration;
        var fromTo = cc.progressFromTo(duration, 0, 100);
        this.progressBar.runAction(fromTo);
    }
});
