var AssetMng = cc.Class({
    extends: cc.Component,

    properties: {
        texBust: {
            default: null,
            type: cc.SpriteFrame
        },
        texCardInfo: {
            default: null,
            type: cc.SpriteFrame
        },
        texCountdown: {
            default: null,
            type: cc.SpriteFrame
        },
        texBetCountdown: {
            default: null,
            type: cc.SpriteFrame
        },
        playerPhotos: {
            default: [],
            type: cc.SpriteFrame
        },
    }
});
