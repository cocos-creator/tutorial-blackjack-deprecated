var Game = require('Game');
var Types = require('Types');
var ActorPlayingState = Types.ActorPlayingState;

cc.Class({
    extends: cc.Component,

    properties: {
        playerInfo: {
            default: null,
            type: cc.Node
        },
        stakeOnTable: {
            default: null,
            type: cc.Node
        },
        cardInfo: {
            default: null,
            type: cc.Node
        },
        cardPrefab: {
            default: null,
            type: cc.Prefab
        },
        anchorCards: {
            default: null,
            type: cc.Node
        },
        spPlayerName: {
            default: null,
            type: cc.Sprite
        },
        labelPlayerName: {
            default: null,
            type: cc.Label
        },
        labelTotalStake: {
            default: null,
            type: cc.Label
        },
        spPlayerPhoto: {
            default: null,
            type: cc.Sprite
        },
        spCountdown: {
            default: null,
            type: cc.Sprite
        },
        labelStakeOnTable: {
            default: null,
            type: cc.Label
        },
        spChips: {
            default: [],
            type: cc.Sprite
        },
        labelCardInfo: {
            default: null,
            type: cc.Label
        },
        spCardInfo: {
            default: null,
            type: cc.Sprite
        },
        animFX: {
            default: null,
            type: cc.Node
        },
        cardSpace: 0
    },

    onLoad: function () {
    },

    init: function ( playerInfo, playerInfoPos, stakePos, turnDuration, switchSide ) {
        // actor
        this.actor = this.getComponent('Actor');

        // nodes
        this.sgCountdown = null;
        this.turnDuration = turnDuration;

        this.playerInfo.position = playerInfoPos;
        this.stakeOnTable.position = stakePos;
        this.labelPlayerName.string = playerInfo.name;
        this.updateTotalStake(playerInfo.gold);
        var photoIdx = playerInfo.photoIdx % 5;
        this.spPlayerPhoto.spriteFrame = Game.instance.assetMng.playerPhotos[photoIdx];
        // fx
        this.animFX = this.animFX.getComponent('FXPlayer');
        this.animFX.init();
        this.animFX.show(false);

        this.progressTimer = this.initCountdown();

        // switch side
        if (switchSide) {
            this.spCardInfo.getComponent('SideSwitcher').switchSide();
            this.spPlayerName.getComponent('SideSwitcher').switchSide();
        }
    },

    initDealer: function () {
        // fx
        this.animFX = this.animFX.getComponent('FXPlayer');
        this.animFX.init();
        this.animFX.show(false);
    },

    updateTotalStake: function (num) {
        this.labelTotalStake.string = '$' + num;
    },

    initCountdown: function () {
        var countdownUrl = Game.instance.assetMng.texCountdown.getTexture().url;
        this.sgCountdown = new _ccsg.Sprite(countdownUrl);

        var progressTimer = new cc.ProgressTimer(this.sgCountdown);
        progressTimer.setName('progressTimer');
        progressTimer.setMidpoint(cc.p(0.5, 0.5));
        progressTimer.setType(cc.ProgressTimer.Type.RADIAL);
        this.playerInfo._sgNode.addChild(progressTimer);
        progressTimer.setPosition(cc.p(0, 0));
        progressTimer.setPercentage(100);

        return progressTimer;
    },

    startCountdown: function() {
        if (this.progressTimer) {
            var fromTo = cc.progressFromTo(this.turnDuration, 100, 0);
            this.progressTimer.runAction(fromTo);
        }
    },

    resetCountdown: function() {
        if (this.progressTimer) {
            this.progressTimer.stopAllActions();
            this.progressTimer.setPercentage(100);
        }
    },

    playBlackJackFX: function () {
        this.animFX.playFX('blackjack');
    },

    playBustFX: function () {
        this.animFX.playFX('bust');
    },

    onDeal: function (card, show) {
        var newCard = cc.instantiate(this.cardPrefab).getComponent('Card');
        newCard.init(card);
        newCard.reveal(show);

        //var width = newCard.getContentSize().width;
        var index = this.actor.cards.length - 1;
        var endPos = cc.p(this.cardSpace * index, 0);
        var startPos = cc.p(0, 0);
        // = this.cardSpace * index;
        // newCard.y = 0;
        this.anchorCards.addChild(newCard);
        newCard.setPosition(startPos);

        var moveAction = cc.moveTo(0.5, endPos);
        var callback = cc.callFunc(this._onDealEnd, this, this.cardSpace * index);
        newCard.runAction(cc.sequence(moveAction, callback));
    },

    _onDealEnd: function(target, pointX) {
        this.resetCountdown();
        if(this.actor.state === ActorPlayingState.Normal) {
            this.startCountdown();
        }
        this.updatePoint();
        if (this.shouldUpdatePointPos) {
            this._updatePointPos(pointX);
        }
    },

    onReset: function () {
        this.cardInfo.active = false;

        this.anchorCards.removeAllChildren();

        this._resetChips();
    },

    onRevealHoldCard: function () {
        var card = cc.find('cardPrefab', this.anchorCards);
        card.reveal(true);
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
        this.cardInfo.active = true;
        this.labelCardInfo.string = this.actor.bestPoint.toString();

        switch (this.actor.hand) {
            case Types.Hand.BlackJack:
                this.animFX.playFX('blackjack');
                break;
            case Types.Hand.FiveCard:
                // TODO
                break;
        }
    },

    _updatePointPos: function (xPos) {
        this.cardInfo.setPositionX(xPos + 50);
    },

    showStakeChips: function(stake) {
        var chips = this.spChips;
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
            chips[i].enabled = true;
        }
    },

    _resetChips: function () {
        for (var i = 0; i < this.spChips.length; ++i) {
            this.spChips.enabled = false;
        }
    },

    updateState: function () {
        switch (this.actor.state) {
            case ActorPlayingState.Normal:
                this.cardInfo.active = true;
                this.updatePoint();
                break;
            case ActorPlayingState.Bust:
                // var min = Utils.getMinMaxPoint(this.actor.cards).min;
                // this.point.string = '爆牌(' + min + ')';
                this.cardInfo.active = false;
                this.animFX.playFX('bust');
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
});
