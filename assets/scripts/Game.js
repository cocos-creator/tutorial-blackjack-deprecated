var players = require('PlayerData').players;
var Decks = require('Decks');
var Types = require('Types');
var ActorPlayingState = Types.ActorPlayingState;
var Fsm = require('game-fsm');

var Game = cc.Class({
    extends: cc.Component,

    properties: {
        playerAnchors: {
            default: [],
            type: cc.Node
        },
        playerPrefab: {
            default: null,
            type: cc.Prefab
        },
        inGameUI: {
            default: null,
            type: cc.Node
        },
        assetMng: {
            default: null,
            type: cc.Node
        },
        audioMng: {
            default: null,
            type: cc.Node
        },
        turnDuration: 0,
        betDuration: 0,

        totalChipsNum: {
            default: 0,
            tooltip: '当前筹码数'
        },
    },

    statics: {
        instance: null
    },

    // use this for initialization
    onLoad: function () {
        Game.instance = this;
        this.inGameUI = this.inGameUI.getComponent('InGameUI');
        this.assetMng = this.assetMng.getComponent('AssetMng');
        this.audioMng = this.audioMng.getComponent('AudioMng');
        this.inGameUI.init(this.betDuration);
        this.player = null;
        this.createPlayers();

        // init logic
        var numberOfDecks = 1;
        this.decks = new Decks(numberOfDecks);
        this.fsm = Fsm;
        this.fsm.init(this);

        // start
        this.inGameUI.startCountdown();
        this.updateTotalChips();

        this.audioMng.playMusic();
    },

    addStake: function (delta) {
        if (this.totalChipsNum < delta) {
            cc.log('not enough chips!');
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
        //this.totalChips.setString(this.totalChipsNum);
        //this.player.updateTotalChips(this.totalChipsNum);
    },

    createPlayers: function () {
        for (var i = 0; i < 5; ++i) {
            var playerNode = cc.instantiate(this.playerPrefab);
            var anchor = this.playerAnchors[i];
            var switchSide = (i >= 2);
            anchor.addChild(playerNode);
            playerNode.position = cc.p(0, 0);

            var playerInfoPos = cc.find('anchorPlayerInfo', anchor).getPosition();
            var stakePos = cc.find('anchorStake', anchor).getPosition();
            var actorRenderer = playerNode.getComponent('ActorRenderer');
            actorRenderer.init(players[i], playerInfoPos, stakePos, this.turnDuration, switchSide);
            if (i === 2) {
                this.player = playerNode.getComponent('Player');
            }
        }
    },

    // UI EVENT CALLBACKS

    // 玩家要牌
    hit: function () {
        this.player.addCard(this.decks.draw());
        if (this.player.state === ActorPlayingState.Bust) {
            // if every player end
            this.fsm.onPlayerActed();
        }

        this.audioMng.playCard();

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
        this.audioMng.playButton();
    },

    // 玩家停牌
    stand: function () {
        this.player.stand();

        this.audioMng.playButton();

        // if every player end
        this.fsm.onPlayerActed();
    },

    //
    deal: function () {
        this.fsm.toDeal();
        this.audioMng.playButton();
    },

    //
    start: function () {
        this.fsm.toBet();
        this.audioMng.playButton();
    },

    // 玩家报到
    report: function () {
        this.player.report();

        // if every player end
        this.fsm.onPlayerActed();
    },

    quitToMenu: function () {
        cc.director.loadScene('menu');
    },

    // FSM CALLBACKS

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

    // 下注
    onBetState: function  (enter) {
        //if (enter) {
        //    this.decks.reset();
        //    this.player.reset();
        //    this.dealer.reset();
        //    this.info.string = '请下注';
        //    this.bettingCountdown.setVisible(true);
        //    this.bettingCountdown.startCountdown();
        //    this.inGameUI.showCurrency(true);
        //    // this.player.setStakePosForBet();
        //    this.playersAnchor.getChildren().forEach(function(player) {
        //        // player.init(index);
        //        player.setStakePosForBet();
        //    });
        //    this.audioMng.resumeMusic();
        //}
        //this.dealBtn.visible = enter;
        this.inGameUI.betStateUI.active = enter;
        this.inGameUI.gameStateUI.active = !enter;
        //this.info.visible = enter;
    },

    // PRIVATES

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

});
