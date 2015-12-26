var Game = require('Demo');

cc.Class({
    extends: cc.Component,

    properties: {
        btnChips: {
            default: [],
            type: cc.Node
        },
        btnResetChips: {
            default: null,
            type: cc.Node
        },

        bettingChipsAnchor: {
            default: null,
            type: cc.Node
        },

        chipValues: {
            default: [],
            type: 'Integer'
        },

        chipPrefab: {
            default: null,
            type: cc.Node
        }
    },

    onLoad: function() {
        // temp workaround
        // this.btnChips = [];
        // this.btnChips[0] = this.getChildByName('btnChip0');
        // this.btnChips[1] = this.getChildByName('btnChip1');
        // this.btnChips[2] = this.getChildByName('btnChip2');
        // this.btnChips[3] = this.getChildByName('btnChip3');
        // temp end

        this._registerButtons();
    },

    resetBettingChips: function() {
        this.bettingChipsAnchor.removeAllChildren();
    },

    _registerButtons: function() {
        var self = this;
        var registerBtn = function(index) {
            self.btnChips[index].addTouchEventListener(function (sender, type) {
                if (type !== ccui.Widget.TOUCH_ENDED) {
                    return;
                }
                if (Game.instance.addStake(self.chipValues[index])) {
                    self.playAddChip(
                        this.convertToWorldSpace(self.btnChips[index].getPosition()),
                        Game.instance.player.cardAnchor.getParent()
                            .convertToWorldSpace(cc.p(Game.instance.player.cardAnchor.x,
                                                      Game.instance.player.cardAnchor.y))
                    );
                }
            }, self);
        };
        for (var i = 0; i < self.btnChips.length; ++i) {
            registerBtn(i);
        }
        // reset chips
        self.btnResetChips.addTouchEventListener(function (sender, type) {
            if (type !== ccui.Widget.TOUCH_ENDED) {
                return;
            }
            Game.instance.resetStake();
            Game.instance.info.setVisible(false);
        }, self);
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
    }
});
