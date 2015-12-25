var Decks = require('decks');
var Types = require('types');
var ActorPlayingState = Types.ActorPlayingState;

cc.Class({
    extends: Fire.Behavior,

    properties: {
        /**
         * 几副牌一起玩
         */
        numberOfDecks: {
            default: 1,
            type: 'Integer'
        },

        totalChipsNum: 0,

        player: {
            default: null,
            type: cc.Node
        },

        playersAnchor: {
            default: null,
            type: cc.Node
        },

        dealer: {
            default: null,
            type: cc.Node
        },

        hitBtn: {
            default: null,
            type: cc.Node
        },

        standBtn: {
            default: null,
            type: cc.Node
        },

        startBtn: {
            default: null,
            type: cc.Node
        },

        reportBtn: {
            default: null,
            type: cc.Node
        },

        betUI: {
            default: null,
            type: cc.Node
        },

        inGameUI: {
            default: null,
            type: cc.Node
        },

        totalChips: {
            default: null,
            type: cc.Node
        },

        dealBtn: {
            default: null,
            type: cc.Node
        },

        info: {
            default: null,
            type: cc.Node
        },

        bettingCountdown: {
            default: null,
            type: cc.Node
        },

        canReport: {
            default: false,
            notify: function () {
                this.reportBtn.visible = this.canReport;
            },
            serializable: false,
            visible: false,
        },

        audioMng: {
            default: null,
            type: cc.Node
        }
    },

    statics: {
        instance: null
    },

    onLoad: function () {
        Demo.instance = this;
        this.updateTotalChips();
        this.decks = new Decks(this.numberOfDecks);

        this.bettingCountdown.init();

        this.inGameUI.init();

        this.playersAnchor.getChildren().forEach(function(player, index) {
            player.init(index);
        });

        this.fsm = require('demo-fsm');
        this.fsm.init(this);

        this.standBtn.visible = false;
        this.hitBtn.visible = false;
        this.info.visible = false;
        this.startBtn.visible = false;
        this.reportBtn.visible = false;

        this.hitBtn.addTouchEventListener(function (sender, type) {
            if (type !== ccui.Widget.TOUCH_ENDED) {
                return;
            }
            this._hit();
            this.audioMng.playButton();
        }, this);

        this.standBtn.addTouchEventListener(function (sender, type) {
            if (type !== ccui.Widget.TOUCH_ENDED) {
                return;
            }
            this._stand();
            this.audioMng.playButton();
        }, this);

        this.dealBtn.addTouchEventListener(function (sender, type) {
            if (type !== ccui.Widget.TOUCH_ENDED) {
                return;
            }
            this.fsm.toDeal();
            this.audioMng.playButton();
        }, this);

        this.startBtn.addTouchEventListener(function (sender, type) {
            if (type !== ccui.Widget.TOUCH_ENDED) {
                return;
            }
            this.fsm.toBet();
            this.audioMng.playButton();
        }, this);

        this.reportBtn.addTouchEventListener(function (sender, type) {
            if (type !== ccui.Widget.TOUCH_ENDED) {
                return;
            }
            this._report();
        }, this);

        // music
        this.audioMng.playMusic();
    },

    /**
     * 下注
     */
    onBetState: function  (enter) {
        if (enter) {
            this.decks.reset();
            this.player.reset();
            this.dealer.reset();
            this.info.string = '请下注';
            this.bettingCountdown.setVisible(true);
            this.bettingCountdown.startCountdown();
            this.inGameUI.showCurrency(true);
            // this.player.setStakePosForBet();
            this.playersAnchor.getChildren().forEach(function(player) {
                // player.init(index);
                player.setStakePosForBet();
            });
            this.audioMng.resumeMusic();
        }
        this.dealBtn.visible = enter;
        this.betUI.visible = enter;
        this.info.visible = enter;
    },

    addStake: function (delta) {
        if (this.totalChipsNum < delta) {
            Fire.log('not enough chips!');
            this.info.setVisible(true);
            this.info.setString('金币不足!');
            return false;
        } else {
            this.totalChipsNum -= delta;
            this.updateTotalChips();
            this.player.addStake(delta);
            this.audioMng.playChips();
            this.info.setVisible(false);
            this.info.setString('请下注');
            return true;
        }

    },

    resetStake: function() {
        this.totalChipsNum += this.player.stakeNum;
        this.player.resetStake();
        this.updateTotalChips();
        this.betUI.resetBettingChips();
    },

    updateTotalChips: function() {
        this.totalChips.setString(this.totalChipsNum);
        this.player.updateTotalChips(this.totalChipsNum);
    },

    // 玩家要牌
    _hit: function () {
        this.player.addCard(this.decks.draw());
        this.audioMng.playCard();

        if (this.player.state === ActorPlayingState.Bust) {
            // if every player end
            this.fsm.onPlayerActed();
        }

        //if (this.dealer.state === ActorPlayingState.Normal) {
        //    if (this.dealer.wantHit()) {
        //        this.dealer.addCard(this.decks.draw());
        //    }
        //    else {
        //        this.dealer.stand();
        //    }
        //}
        //
        //if (this.dealer.state === ActorPlayingState.Bust) {
        //    this.state = GamingState.End;
        //}
    },

    // 玩家停牌
    _stand: function () {
        this.player.stand();

        // if every player end
        this.fsm.onPlayerActed();
    },

    // 玩家报到
    _report: function () {
        this.player.report();

        // if every player end
        this.fsm.onPlayerActed();
    },

    onEnterDealState: function () {
        this.betUI.resetBettingChips();
        this.bettingCountdown.setVisible(false);
        this.inGameUI.showCurrency(false);
        this.player.showStakeChips(this.player.stakeNum);
        // this.player.setStakePosForPlay();
        this.playersAnchor.getChildren().forEach(function(player) {
            // player.init(index);
            player.setStakePosForPlay();
        });
        this.player.addCard(this.decks.draw());
        var holdCard = this.decks.draw();
        this.dealer.addHoleCard(holdCard);
        this.player.addCard(this.decks.draw());
        this.dealer.addCard(this.decks.draw());
        this.audioMng.playCard();
        this.fsm.onDealed();
    },

    onPlayersTurnState: function (enter) {
        this.standBtn.visible = enter;
        this.hitBtn.visible = enter;
        this.reportBtn.visible = false;
    },

    onEnterDealersTurnState: function () {
        while (this.dealer.state === ActorPlayingState.Normal) {
            if (this.dealer.wantHit()) {
                this.dealer.addCard(this.decks.draw());
            }
            else {
                this.dealer.stand();
            }
        }
        this.fsm.onDealerActed();
    },

    // 判断玩家输赢
    _getPlayerResult: function (player, dealer) {
        var Outcome = Types.Outcome;
        if (player.state === ActorPlayingState.Bust) {
            return Outcome.Lose;
        }
        else if (dealer.state === ActorPlayingState.Bust) {
            return Outcome.Win;
        }
        else {
            if (player.state === ActorPlayingState.Report) {
                return Outcome.Win;
            }
            else {
                if (player.hand > dealer.hand) {
                    return Outcome.Win;
                }
                else if (player.hand < dealer.hand) {
                    return Outcome.Lose;
                }
                else {
                    if (player.bestPoint === dealer.bestPoint) {
                        return Outcome.Tie;
                    }
                    else if (player.bestPoint < dealer.bestPoint) {
                        return Outcome.Lose;
                    }
                    else {
                        return Outcome.Win;
                    }
                }
            }
        }
    },

    // 结算
    onEndState: function (enter) {
        if (enter) {
            this.dealer.revealHoldCard();

            var outcome = this._getPlayerResult(this.player, this.dealer);
            switch (outcome) {
                case Types.Outcome.Win:
                    this.info.string = 'You Win';
                    this.audioMng.pauseMusic();
                    this.audioMng.playWin();
                    // 拿回原先自己的筹码
                    this.totalChipsNum += this.player.stakeNum;
                    // 奖励筹码
                    var winChipsNum = this.player.stakeNum;
                    if (!this.player.state === Types.ActorPlayingState.Report) {
                        if (this.player.hand === Types.Hand.BlackJack) {
                            winChipsNum *= 1.5;
                        }
                        else {
                            // 五小龙
                            winChipsNum *= 2.0;
                        }
                    }
                    this.totalChipsNum += winChipsNum;
                    this.updateTotalChips();
                    break;

                case Types.Outcome.Lose:
                    this.info.string = 'You Lose';
                    this.audioMng.pauseMusic();
                    this.audioMng.playLose();
                    break;

                case Types.Outcome.Tie:
                    this.info.string = 'Draw';
                    // 退还筹码
                    this.totalChipsNum += this.player.stakeNum;
                    this.updateTotalChips();
                    break;
            }
        }

        this.info.visible = enter;
        this.startBtn.visible = enter;
    },
});
