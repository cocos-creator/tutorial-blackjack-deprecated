var Game = require('Game');

cc.Class({
    extends: cc.Component,

    properties: {
        chipPrefab: {
            default: null,
            type: cc.Prefab
        },
        btnChips: {
            default: [],
            type: cc.Node
        },
        chipValues: {
            default: [],
            type: 'Integer'
        },
        anchorChipToss: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    init: function () {
        this.registerBtns();
    },

    registerBtns: function () {
        var self = this;
        var registerBtn = function (index) {
            if (Game.instance.addStake(self.chipValues[index])) {
                self.playAddChip();
            }
        };
        for (var i = 0; i < self.btnChips.length; ++i) {
            self.btnChips[i].on('touchstart', registerBtn, this);
        }
    },

    playAddChip: function () {
        var startPos = cc.p(cc.randomMinus1To1() * 50, cc.randomMinus1To1() * 50);
        var chip = cc.instantiate(this.chipPrefab);
        this.anchorChipToss.addChild(chip);
        chip.setPosition(startPos);
        chip.getComponent(cc.Animation).play('chip_toss');
    },

    resetTossedChips: function () {
        this.anchorChipToss.removeAllChildren();
    },
});
