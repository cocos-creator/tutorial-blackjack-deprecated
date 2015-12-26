cc.Class({
    extends: cc.Component,

    properties: {
        cardBgFront: {
            default: null,
            type: cc.SpriteFrame
        },
        cardBgBack: {
            default: null,
            type: cc.SpriteFrame
        },
        cardFaces: {
            default: null,
            type: cc.SpriteFrame,
            tooltip: "11, 12, 13"
        },
        bigSuits: {
            default: null,
            type: cc.SpriteFrame,
            tooltip: "黑桃, 红桃, 梅花, 方块"
        },
        smallSuits: {
            default: null,
            type: cc.SpriteFrame,
            tooltip: "黑桃, 红桃, 梅花, 方块"
        },
        bakedCards: {
            default: [],
            type: cc.SpriteFrame
        },
        fxPlayers: {
            default: [],
            type: cc.Node
        }
    },

    statics: {
        _instance: null
    },

    onLoad: function() {
        for (var i = 0; i < this.fxPlayers.length; ++i) {
            this.fxPlayers[i].init();
        }
    },

    FillBakedCards: function () {
        var Types = require('types');
        var Suit = Types.Suit;

        // 贴图所在目录
        var base = Fire.url.raw('textures/placeholder/cards/');
        // 贴图的花色顺序
        var suits = [Suit.Spade, Suit.Diamond, Suit.Club, Suit.Heart];

        this.bakedCards = new Array(52);
        for (var i = 0; i < 4; i++) {
            var s = suits[i];
            for (var p = 1; p <= 13; p++) {
                var num = i * 13 + (p - 1);
                var url = base + num + '_card.png';
                var card = new Types.Card(p, s);
                this.bakedCards[card.id] = url;
            }
        }
    }
});

Fire.JS.get(Resources, 'instance', function () {
    if (!Resources._instance) {
        Resources._instance = Fire.find('Resources');
        if (!Resources._instance) {
            Fire.error('Can not find "Resources" in scene.');
        }
    }
    return Resources._instance;
});
