var Types = require('types');

cc.Class({
    extends: cc.Component,

    properties: {
        // 牌面数据，只读
        card: {
            default: function () {
                return Types.Card.fromId(0);
            },
            //notify: function () {
            //    this.refresh();
            //},
            serializable: false,
            visible: false,
        },
        // 明牌还是暗牌
        show: {
            default: true,
            notify: function () {
                for (var i = 0; i < this.children.length; i++) {
                    var c = this.children[i];
                    c.visible = this.show;
                }
                var res = Resources.instance;
                this.texture = this.show ? res.cardBgFront : res.cardBgBack;
            },
            serializable: false,
        },
    },

    statics: {
        /**
         * @method fromCard
         * @static
         * @param {Card} card
         * @return {cc.Node}
         */
        fromCard: function (card) {
            var res = Resources.instance;
            var prefabs = Prefabs.instance;

            var isFaceCard = card.point > 10;
            var cardPrefab = isFaceCard ? prefabs.faceCard : prefabs.normalCard;
            var cloned = cc.instantiate(cardPrefab);

            if (isFaceCard) {
                cloned.content.texture = res.cardFaces[card.point - 10 - 1];
            }
            else {
                cloned.content.texture = res.bigSuits[card.suit - 1];
            }

            // for jsb
            cloned.point.setString( card.pointName );
            // cloned.point.string = card.pointName;

            if (card.isRedSuit) {
                cloned.point.color = cloned.redTextColor.toCCColor();
            }
            else {
                cloned.point.color = cloned.blackTextColor.toCCColor();
            }

            cloned.suit.texture = res.smallSuits[card.suit - 1];

            // Fire.mixin(cloned, CardRenderer);
            return cloned;
        }
    },

    refresh: function () {
        var res = Resources.instance;
        var prefabs = Prefabs.instance;
        if (this.show) {
            this.texture = res.cardBgFront;
            var isFaceCard = this.point > 10;
            var cardPrefab = isFaceCard ? prefabs.faceCard : prefabs.normalCard;
            var cloned = Fire.instantiate(cardPrefab);
            //cloned.content.texture = res.
            this.addChild(cloned.content);
        }
        else {
            this.texture = res.cardBgBack;
            this.removeAllChildren();
        }
    },
});
