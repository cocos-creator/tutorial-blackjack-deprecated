var Game = require('Demo');
var TestPlayers = require('testPlayers');
cc.Class({
    extends: cc.Component,
    properties: {
        portrait: {
            default: null,
            type: cc.Node
        },
        playerName: {
            default: null,
            type: cc.Node
        },
        labelGold: {
            default: null,
            type: cc.Node
        },
        btnClose: {
            default: null,
            type: cc.Node
        }
    },
    onLoad: function() {
        this.btnClose.addTouchEventListener(function (sender, type) {
            if (type !== ccui.Widget.TOUCH_ENDED) {
                return;
            }
            this.setVisible(false);
        }, this);
    },
    initPlayer: function(playerInfo) {
        this.portrait.setTexture(TestPlayers.getUrlByImageName(playerInfo.image));
        var name = playerInfo.name.length > 5 ? playerInfo.name.substr(0, 5) + '..' : playerInfo.name;
        this.playerName.setString(name);
        this.labelGold.setString(playerInfo.gold);
    }

});
