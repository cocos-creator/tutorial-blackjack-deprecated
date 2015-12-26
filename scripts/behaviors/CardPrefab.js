cc.Class({
    extends: cc.Component,

    properties: {
        "说明": {
            default: "只可编辑子节点",
            serializable: false
        },
        point: {
            default: null,
            type: cc.Node
        },
        suit: {
            default: null,
            type: cc.Node
        },
        content: {
            default: null,
            type: cc.Node
        },
        redTextColor: {
            default: cc.Color.WHITE,
        },
        blackTextColor: {
            default: cc.Color.WHITE,
        },
    },
});
