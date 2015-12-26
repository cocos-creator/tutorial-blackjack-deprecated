var Game = require('Demo');
var TestPlayers = require('testPlayers');

cc.Class({
    extends: cc.Component,
    properties: {
        btnBack: {
            default: null,
            type: cc.Node
        },
        btnChat: {
            default: null,
            type: cc.Node
        },
        panelChat: {
            default: null,
            type: cc.Node
        },
        currencyUI: {
            default: null,
            type: cc.Node
        },
        playerBtns: {
            default: [],
            type: cc.Node
        },
        socialPanel: {
            default: null,
            type: cc.Node
        }
        // btnAdvanced: {
        //     default: null,
        //     type: cc.Node
        // },
        // btnExpert: {
        //     default: null,
        //     type: cc.Node
        // }
    },
    init: function() {
        this._registerButtons();
        this.panelChat.setVisible(false);
        this.socialPanel.setVisible(false);
    },
    showCurrency: function(show) {
        this.currencyUI.setVisible(show);
        this.btnChat.setVisible(!show);
        this.panelChat.setVisible(false);
    },
    _registerButtons: function() {

        this.btnBack.addTouchEventListener(function (sender, type) {
            if (type !== ccui.Widget.TOUCH_ENDED) {
                return;
            }
            Game.instance.audioMng.playButton();
            this._loadMenu();
        }, this);

        this.btnChat.addTouchEventListener(function (sender, type) {
            if (type !== ccui.Widget.TOUCH_ENDED) {
                return;
            }
            Game.instance.audioMng.playButton();
            this.panelChat.setVisible(!this.panelChat.visible);
        }, this);

        var self = this;
        var registerBtn = function(index) {
            self.playerBtns[index].addTouchEventListener(function (sender, type) {
                if (type !== ccui.Widget.TOUCH_ENDED) {
                    return;
                }
            self.showSocialPanel(TestPlayers.playerList[index]);
            }, self);
        };
        for (var i = 0; i < self.playerBtns.length; ++i) {
            registerBtn(i);
        }
        //
        // this.btnExpert.addTouchEventListener(function (sender, type) {
        //     if (type !== ccui.Widget.TOUCH_ENDED) {
        //         return;
        //     }
        //     this._loadGame();
        // }, this);
    },
    _loadMenu: function() {
        cc.audioEngine.stopMusic();
        cc.director.loadScene( 'menu' );
    },
    showSocialPanel: function(playerInfo) {
        this.socialPanel.initPlayer(playerInfo);
        this.socialPanel.setVisible(true);
    }
});
