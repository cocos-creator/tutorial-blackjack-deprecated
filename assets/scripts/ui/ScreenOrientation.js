var Utils = require('../common/utils');

Fire.Class({
    extends: Fire.Behavior,

    properties: {
        orientationTexture: {
            default: '',
            url: Fire.Texture
        }
    },

    // use this for initialization
    onLoad: function () {
        var orientationLayer = new cc.LayerColor(cc.color.BLACK);
        var orientationSprite = new cc.Sprite(this.orientationTexture);

        orientationLayer.addChild(orientationSprite);
        this.addChild(orientationLayer);

        this.orientationLayer = orientationLayer;
        this.orientationSprite = orientationSprite;

        this.onOrientationChanged();

        if ( Utils.isMobile() ) {
            window.addEventListener('resize', this.onOrientationChanged.bind(this));
        }
        else {
            cc.eventManager.addCustomListener('canvas-resize', function () {
                this.onOrientationChanged();
            }.bind(this));
        }
    },

    onOrientationChanged: function () {

        var canvasSize = Fire.engine.canvasSize;
        // 横屏屏模式
        if (canvasSize.x > canvasSize.y) {
            this.orientationLayer.visible = false;
        }
        // 竖屏模式
        else {
            var width = this.width;
            var height = this.height;

            this.orientationLayer.visible = true;
            this.orientationLayer.width = width;
            this.orientationLayer.height = height;

            this.orientationSprite.x = width/2;
            this.orientationSprite.y = height/2;

            this.orientationSprite.scale = width / this.orientationSprite.width;
        }
    }
});
