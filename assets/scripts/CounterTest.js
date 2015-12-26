cc.Class({
    extends: cc.Component,

    properties: {
        // ...
    },

    // use this for initialization
    onLoad: function () {
        this.progressBar = new cc.ProgressTimer(this.node._sgNode);
        this.progressBar.setType(cc.ProgressTimer.TYPE_RADIAL);
        this.progressBar.setPercentage(100);
        this.node._sgNode.addChild(this.progressBar);
        this.progressBar.setPosition(cc.p(0,0));
        var fromTo = cc.progressFromTo(1, 100, 0);
        this.progressBar.runAction(fromTo);
    },

    // called every frame
    update: function (dt) {

    },
});
