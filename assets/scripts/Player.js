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
        this._super();

        this.stakeNum = 0;
    },

    reset: function () {
        this._super();

        // this.labelStake = this.getChildByName('Stake');
        this.resetStake();
    },

    addCard: function (card) {
        this._super(card);
        
        var Game = require('Game');
        Game.instance.canReport = this.canReport;
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
