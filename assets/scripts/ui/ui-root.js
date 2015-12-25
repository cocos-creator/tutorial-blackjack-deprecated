var Utils = require('../common/utils');

var HorizontalAlignType = require('./ui-types').HorizontalAlignType;
var VerticalAlignType = require('./ui-types').VerticalAlignType;

Fire.Class({
    extends: Fire.Behavior,

    properties: {
        isUiRoot: {
            get: function () {
                return true;
            },
            visible: false
        },

        fitHeight: true,
        fitWidth: true
    },

    // use this for initialization
    onLoad: function () {
        var view = cc.view;
        cc.view.setResolutionPolicy(cc.ResolutionPolicy.FIXED_HEIGHT);

        if (!cc.sys.isNative) {
            Fire.engine.canvasSize = Fire.engine.canvasSize;
        }

        this.onResize();

        if ( Utils.isMobile() && !cc.sys.isNative) {
            window.addEventListener('resize', this.onResize.bind(this));
        }
        else {
            cc.eventManager.addCustomListener('canvas-resize', function () {
                this.onResize();
            }.bind(this));
        }

        this._loaded = true;
    },

    onResize: function () {
        var canvasSize;

        if (cc.sys.isNative) {
            canvasSize = cc.p(cc.winSize.width, cc.winSize.height);
        }
        else {
            canvasSize = Fire.engine.canvasSize;
        }

        var designResolution = Fire.engine.designResolution;

        var scaleX = (canvasSize.x/designResolution.x);
        var scaleY = (canvasSize.y/designResolution.y);

        if (scaleX < scaleY) {

            if (this.fitWidth) {
                var scale = scaleX / scaleY;
                this.scale = scale;

                this.width = designResolution.x;
                this.height = designResolution.y / scale;
            }
            else {
                var scale =  1;
                this.scale = scale;

                this.width = designResolution.x * scaleX / scaleY;
                this.height = designResolution.y;
            }
        }
        else if (scaleX > scaleY){
            if (this.fitHeight) {
                this.scale = 1;
                this.width = designResolution.x * scaleX / scaleY;
                this.height = designResolution.y;
            }
            else {
                this.scale = 1 / scaleY;
                this.width = designResolution.x * scaleY;
                this.height = designResolution.y * scaleY;
            }
        }
        else {
            this.scale = 1;
            this.width = designResolution.x;
            this.height = designResolution.y;
        }

        this._layoutDirty = true;
    },

    // called every frame
    update: function (dt) {
        if (!this._loaded) return;

        this.doLayout();
    },

    doLayout: function () {
        if (!this._layoutDirty) return;

        var children = [];

        this.deepQueryChildren(function (child) {
            var target = child.layoutTarget;
            if (target) {
                if (typeof target._layoutReference === 'undefined') target._layoutReference = 0;
                else target._layoutReference ++;

                children.push(child);
            }

            return true;
        });

        children.sort(function (a, b) {
            return a._layoutReference > b._layoutReference;
        });

        children.forEach(function (child) {
            if (child.updateLayoutPosition) {
                child.updateLayoutPosition();
            }

            delete child._layoutReference;
        });

        this._layoutDirty = false;
    },

    updateInEditMode: function () {
        this.doLayout();
    },

    deepQueryChildren: function (cb) {
        function traversal (node, cb) {
            var children = node.children;

            for (var i = 0; i<children.length; i++) {
                var child = children[i];

                if (!cb( child )) break;

                traversal(child, cb);
            }
        }

        traversal(this, cb);
    }
});
