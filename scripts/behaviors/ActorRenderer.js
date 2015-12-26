var Types = require('types');
var Utils = require('utils');
var ActorPlayingState = Types.ActorPlayingState;
var CardRenderer = require('CardRenderer');
var TestPlayers = require('testPlayers');

cc.Class({
    extends: cc.Component,

    properties: {
        cardAnchor: {
            default: null,
            type: cc.Node
        },
        shouldUpdatePointPos: false, // 是否需要更新 point 位置
        isPlayer: false,
        // 牌之间的水平间距
        cardSpace: 30,
        actor: {
            default: null,
            type: cc.Node
        },
        point: {
            default: null,
            type: cc.Node
        },
        pointBG: {
            default: null,
            type: cc.Node
        },
        bustBG: {
            default: null,
            type: cc.Node
        },
        fxPlayer: {
            default: null,
            type: cc.Node
        },
        portrait: {
            default: null,
            type: cc.Node
        },
        totalChips: {
            default: null,
            type: cc.Node
        },
        labelName: {
            default: null,
            type: cc.Node
        },
        spriteCountdown: {
            default: null,
            type: cc.Node
        },
        chipsAnchor: {
            default: null,
            type: cc.Node
        },
        stakeAnchor: { // this reference is to move stakeAnchor lower when betting
            default: null,
            type: cc.Node
        }
    },

    init: function (index) {
        this.pointBG.setVisible(false);
        this.bustBG.setVisible(false);
        this._initPlayerInfo(index);
        // init countdown
        if (this.spriteCountdown) {
            this.spriteCountdown.removeFromParent();
            this.progressBar = new cc.ProgressTimer(this.spriteCountdown);
            this.progressBar.setType(cc.ProgressTimer.TYPE_RADIAL);
            this.progressBar.setPercentage(100);
            //this.progressBar.setReverseProgress(true);
            this.getChildByName('photoAnchor').addChild(this.progressBar);
            this.progressBar.setPosition(cc.p(-1.99, 2.49));
        }
        this._resetChips();
    },

    _resetChips: function() {
        // init chips
        if (this.chipsAnchor) {
            this.chipsAnchor.getChildren().forEach(function(chip) {
                chip.setVisible(false);
            });
        }
    },

    startCountdown: function(duration) {
        if (this.spriteCountdown) {
            var fromTo = cc.progressFromTo(duration, 100, 0);
            this.progressBar.runAction(fromTo);
        }
    },

    resetCountdown: function() {
        if (this.progressBar) {
            this.progressBar.stopAllActions();
            this.progressBar.setPercentage(100);
        }
    },

    showStakeChips: function(stake) {
        var chips = this.chipsAnchor.getChildren();
        var count = 0;
        if (stake > 50000) {
            count = 5;
        } else if (stake > 25000) {
            count = 4;
        } else if (stake > 10000) {
            count = 3;
        } else if (stake > 5000) {
            count = 2;
        } else if (stake > 0) {
            count = 1;
        }
        for (var i = 0; i < count; ++i) {
            chips[i].setVisible(true);
        }
    },

    _initPlayerInfo: function(index) {
        var playerInfo = TestPlayers.playerList[index];
        var name = playerInfo.name.length > 5 ? playerInfo.name.substr(0, 5) + '..' : playerInfo.name;
        this.labelName.setString(name);
        if (!this.isPlayer) {
            this.totalChips.setString('￥'+playerInfo.gold);
        }
        this.portrait.setTexture(TestPlayers.getUrlByIndex(index));
        //this.portrait.setScale(1.57);
    },

    // update: function (dt) {
    //
    // },

    updateTotalChips: function(num) {
        this.totalChips.setString('￥'+num);
    },

    onDeal: function (card, show) {
        var newCard = CardRenderer.fromCard(card);
        newCard.show = show;

        //var width = newCard.getContentSize().width;
        var index = this.actor.cards.length - 1;
        var endPos = cc.p(this.cardSpace * index, 0);
        var startPos = this.cardAnchor.convertToNodeSpace(cc.p(667, 750));
        // = this.cardSpace * index;
        // newCard.y = 0;
        this.cardAnchor.addChild(newCard);
        newCard.setPosition(startPos);

        var moveAction = cc.moveTo(0.5, endPos);
        var callback = cc.callFunc(this._onDealEnd, this, this.cardSpace * index);
        newCard.runAction(cc.sequence(moveAction, callback));
    },

    _onDealEnd: function(target, pointX) {
        this.resetCountdown();
        if(this.actor.state === ActorPlayingState.Normal) {
            this.startCountdown(5);
        }
        this.updatePoint();
        if (this.shouldUpdatePointPos) {
            this._updatePointPos(pointX);
        }
    },

    onReset: function () {
        this.pointBG.retain();
        this.bustBG.retain();

        this.cardAnchor.removeAllChildren();

        this.cardAnchor.addChild(this.pointBG);
        this.cardAnchor.addChild(this.bustBG);

        this.pointBG.release();
        this.bustBG.release();

        this.pointBG.setVisible(false);
        this.bustBG.setVisible(false);
        this._resetChips();
    },

    onRevealHoldCard: function () {
        var cardRenderer = cc.find('<CardRenderer>', this.cardAnchor);
        cardRenderer.show = true;
        this.updateState();
    },

    // onRevealNormalCard: function() {
    //     var self = this;
    //     self.cards.forEach(function(card) {
    //         // var cardRenderer = Fire.find('<CardRenderer>', card);
    //         card.show = true;
    //         self.updateState();
    //     });
    // },

    updatePoint: function () {
        this.pointBG.setVisible(true);
        this.point.string = this.actor.bestPoint;

        switch (this.hand) {
            case Types.Hand.BlackJack:
                this.fxPlayer.playBlackJack();
                break;
            case Types.Hand.FiveCard:
                // TODO
                break;
        }
    },

    _updatePointPos: function (xPos) {
        this.pointBG.setPositionX(xPos + 50);
        this.bustBG.setPositionX(xPos + 50);
    },

    updateState: function () {
        switch (this.actor.state) {
            case ActorPlayingState.Normal:
                this.pointBG.setVisible(true);
                this.bustBG.setVisible(false);
                this.updatePoint();
                break;
            case ActorPlayingState.Bust:
                // var min = Utils.getMinMaxPoint(this.actor.cards).min;
                // this.point.string = '爆牌(' + min + ')';
                this.pointBG.setVisible(false);
                this.bustBG.setVisible(true);
                this.fxPlayer.playBust();
                this.resetCountdown();
                break;
            case ActorPlayingState.Stand:
                //var max = Utils.getMinMaxPoint(this.actor.cards).max;
                // this.point.string = '停牌(' + max + ')';
                this.resetCountdown();
                this.updatePoint();
                break;
        }
    },

    setStakePosForBet: function() {
        this.stakeAnchor.setPosition(cc.p(this.cardAnchor.x, this.cardAnchor.y-70));
    },

    setStakePosForPlay: function() {
        this.stakeAnchor.setPosition(cc.p(this.cardAnchor.x,this.cardAnchor.y+90));
    }
});
