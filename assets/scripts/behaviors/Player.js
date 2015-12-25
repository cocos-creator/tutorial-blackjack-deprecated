var Actor = require('Actor');

cc.Class({
    extends: Actor,

    properties: {
        // 赌注
        labelStake: {
            default: null,
            type: cc.Node
        },
    },

    onLoad: function () {
        Actor.prototype.onLoad.call(this);

        this.stakeNum = 0;
    },

    reset: function () {
        Actor.prototype.reset.call(this);

        // this.labelStake = this.getChildByName('Stake');
        this.resetStake();
    },

    addCard: function (card) {
        Actor.prototype.addCard.call(this, card);
        var Demo = require('Demo');
        Demo.instance.canReport = this.canReport;
    },

    addStake: function (delta) {
        this.stakeNum += delta;
        this.updateStake(this.stakeNum);
    },

    resetStake: function (delta) {
        this.stakeNum = 0;
        this.updateStake(this.stakeNum);
    },

    updateStake: function(number) {
        this.labelStake.setString(number);
    },

});
