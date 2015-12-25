cc.Class({
    extends: cc.Component,

    properties: {
        faceCard: {
            default: null,
            type: cc.Node
        },
        normalCard: {
            default: null,
            type: cc.Node
        },
    },

    statics: {
        _instance: null
    },

    onLoad: function () {
        this.visible = false;
        this.pause();
    }
});

Fire.JS.get(Prefabs, 'instance', function () {
    if (!Prefabs._instance) {
        Prefabs._instance = Fire.find('Prefabs');
        if (!Prefabs._instance) {
            Fire.error('Can not find "Prefabs" in scene.');
        }
    }
    return Prefabs._instance;
});
