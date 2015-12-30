cc.Class({
    extends: cc.Component,

    properties: {
        // ...
        target: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function () {
        this.target.node.color = cc.Color.GREEN;
    },

    // called every frame
    update: function (dt) {

    },
});
