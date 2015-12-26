cc.Class({
    extends: cc.Component,

    properties: {
        spRankBG: {
            default: null,
            type: cc.Sprite
        },
        labelRank: {
            default: null,
            type: cc.Label
        },
        labelPlayerName: {
            default: null,
            type: cc.Label
        },
        labelGold: {
            default: null,
            type: cc.Label
        },
        spPlayerPhoto: {
            default: null,
            type: cc.Sprite
        },
        texRankBG: {
            default: [],
            type: cc.SpriteFrame
        },
        texPlayerPhoto: {
            default: [],
            type: cc.SpriteFrame
        }
        // ...
    },

    // use this for initialization
    init: function (rank, playerInfo) {
        if (rank < 3) { // should display trophy
            this.labelRank.node.active = false;
            this.spRankBG.spriteFrame = this.texRankBG[rank];
        } else {
            this.labelRank.node.active = true;
            this.labelRank.string = (rank + 1).toString();
        }

        this.labelPlayerName.string = playerInfo.name;
        this.labelGold.string = playerInfo.gold.toString();
        this.spPlayerPhoto.spriteFrame = this.texPlayerPhoto[playerInfo.photoIdx];
    },

    // called every frame
    update: function (dt) {

    },
});
