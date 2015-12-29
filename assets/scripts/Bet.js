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
                self.playAddChip(
                    self.node.convertToWorldSpace(self.btnChips[index].getPosition()),
                    Game.instance.player.getParent()
                    .convertToWorldSpace(cc.p(Game.instance.player.cardAnchor.x,
                      Game.instance.player.cardAnchor.y))
                    );
            }
        };
        for (var i = 0; i < self.btnChips.length; ++i) {
            self.btnChips[i].on('touchstart', registerBtn, this);
        }
    },

    playAddChip: function(startPos, targetPos) {
        startPos = this.bettingChipsAnchor.convertToNodeSpace(startPos);
        targetPos = this.bettingChipsAnchor.convertToNodeSpace(targetPos);
        targetPos = cc.p(targetPos.x + (Math.random() - 0.5) * 100, targetPos.y + (Math.random() - 0.5) * 50);
        var bezier = [
            startPos,
            cc.p(startPos.x + (targetPos.x - startPos.x)*0.3, targetPos.y + 100),
            targetPos
        ];
        var bezierTo = cc.bezierTo(0.5, bezier);
        var scaleTo = cc.scaleTo(0.5, 1);
        var chip = cc.instantiate(this.chipPrefab);
        this.bettingChipsAnchor.addChild(chip);
        chip.setScale(1.8);
        chip.runAction(cc.spawn(bezierTo, scaleTo));
    },

    // called every frame
    update: function (dt) {

    },
});
