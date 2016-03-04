var Game = require('Game');

cc.Class({
    extends: cc.Component,

    properties: {
        chipPrefab: cc.Prefab,
        btnChips: {
            default: [],
            type: cc.Node
        },
        chipValues: {
            default: [],
            type: 'Integer'
        },
        anchorChipToss: cc.Node
    },

    // use this for initialization
    init: function () {
        this._registerBtns();
    },

    _registerBtns: function () {
        var self = this;
        var registerBtn = function (index) {
            self.btnChips[i].on('touchstart', function (event) {
                if (Game.instance.addStake(self.chipValues[index])) {
                    self.playAddChip();
                }
            }, this);
        };
        for (var i = 0; i < self.btnChips.length; ++i) {
            registerBtn(i);
        }
    },

    playAddChip: function () {
        var startPos = cc.p(cc.randomMinus1To1() * 50, cc.randomMinus1To1() * 50);
        var chip = cc.instantiate(this.chipPrefab);
        this.anchorChipToss.addChild(chip);
        chip.setPosition(startPos);
        chip.getComponent('TossChip').play();
    },

    resetChips: function () {
        Game.instance.resetStake();
        Game.instance.info.enabled = false;
        this.resetTossedChips();
    },

    resetTossedChips: function () {
        this.anchorChipToss.removeAllChildren();
    },
});
