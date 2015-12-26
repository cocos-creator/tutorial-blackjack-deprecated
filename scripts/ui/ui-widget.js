
var HorizontalAlignType = require('./ui-types').HorizontalAlignType;
var VerticalAlignType = require('./ui-types').VerticalAlignType;
var LayoutAnchor = require('./ui-types').LayoutAnchor;

if (Fire.isEditor) {
    // just for editor
    var originSetPosition = cc.Node.prototype.setPosition;
    cc.Node.prototype.setPosition = function (x, y) {
        originSetPosition.apply(this, arguments);

        if (this.updateLayoutAnchor) {
            this.updateLayoutAnchor();
        }

        if (this.requestRootDoLayout) {
            this.requestRootDoLayout();
        }
    }
}

function getNodeWorldBounds(node) {
    var size;

    var anchor = node.layoutAnchor;
    var p = cc.p();

    if (anchor && anchor.width !== -1 && anchor.height !== -1 ) {
        size = cc.size(anchor.width, anchor.height);

        if (!anchor.autoResize) {
            var contentSize = node.getContentSize();
            var anchorPoint = node.getAnchorPoint();

            p.x = anchorPoint.x * (contentSize.width - size.width);
            p.y = anchorPoint.y * (contentSize.height - size.height);
        }
    }
    else {
        size = node.getContentSize();
    }

    var rect = cc.rect(p.x, p.y, size.width, size.height);

    var mat = node.getNodeToWorldTransform();
    cc._rectApplyAffineTransformIn(rect, mat);

    var out = new Fire.Rect();
    out.x = rect.x;
    out.y = rect.y;
    out.width  = rect.width;
    out.height = rect.height;

    return out;
}

Fire.Class({
    extends: Fire.Behavior,

    properties: {
        uiRoot: {
            get: function () {
                var parent = this.parent;
                while(parent) {
                    if (parent.isUiRoot) return parent;

                    parent = parent.parent;
                }

                return null;
            },
            visible: false
        },

        layoutTarget: {
            get: function () {
                return this._layoutTarget;
            },
            set: function (value) {
                if (!value) {
                    Fire.error('The new layoutTarget can\'t be null');
                }
                else if (value === this) {
                    Fire.error('The new layoutTarget can\'t be self');
                }
                else if (value.layoutTarget === this) {
                    Fire.error('The new layoutTarget is circular referenced');
                }
                else {
                    this._layoutTarget = value;
                    this.updateLayoutAnchor();
                }
            },
            type: cc.Node
        },

        _layoutTarget: {
            default: null,
            type: cc.Node
        },

        layoutAnchor: {
            default: null,
            type: LayoutAnchor,

            notify: function (oldValue) {
                if (FIRE_EDITOR) {
                    var newValue = this.layoutAnchor;

                    var needUpdateAnchor = !oldValue || newValue._anchorTypeChanged;
                    if (needUpdateAnchor) {
                        this.updateLayoutAnchor();
                    }

                    if (newValue._anchorChanged) {
                        this.requestRootDoLayout();
                    }

                    newValue._anchorChanged = false;
                    newValue._anchorTypeChanged = false;
                }
            }
        }
    },

    requestRootDoLayout: function () {
        var root = this.uiRoot;
        if (root) {
            root._layoutDirty = true;
        }
    },

    updateLayoutAnchor: function () {
        if (!this.layoutTarget || !this.layoutAnchor) return;

        var targetRect = getNodeWorldBounds(this.layoutTarget);

        var wrapper = Fire(this);
        var rect = getNodeWorldBounds(this);
        var anchor = this.layoutAnchor;
        var parentWorldScale = wrapper.parent.worldScale.x;

        var left = 0;
        if (anchor.leftAlign === HorizontalAlignType.TargetLeft) {
            left = rect.xMin - targetRect.xMin;
        }
        else if (anchor.leftAlign === HorizontalAlignType.TargetRight) {
            left = rect.xMin - targetRect.xMax;
        }
        else if (anchor.leftAlign === HorizontalAlignType.TargetCenter) {
            left = rect.xMin - targetRect.center.x;
        }

        var right = 0;
        if (anchor.rightAlign === HorizontalAlignType.TargetLeft) {
            right = rect.xMax - targetRect.xMin;
        }
        else if (anchor.rightAlign === HorizontalAlignType.TargetRight) {
            right = rect.xMax - targetRect.xMax;
        }
        else if (anchor.rightAlign === HorizontalAlignType.TargetCenter) {
            right = rect.xMax - targetRect.center.x;
        }

        var top = 0;
        if (anchor.topAlign === VerticalAlignType.TargetBottom) {
            top = rect.yMax - targetRect.yMin;
        }
        else if (anchor.topAlign === VerticalAlignType.TargetTop) {
            top = rect.yMax - targetRect.yMax;
        }
        else if (anchor.topAlign === VerticalAlignType.TargetCenter) {
            top = rect.yMax - targetRect.center.y;
        }

        var bottom = 0;
        if (anchor.bottomAlign === VerticalAlignType.TargetBottom) {
            bottom = rect.yMin - targetRect.yMin;
        }
        else if (anchor.bottomAlign === VerticalAlignType.TargetTop) {
            bottom = rect.yMin - targetRect.yMax;
        }
        else if (anchor.bottomAlign === VerticalAlignType.TargetCenter) {
            bottom = rect.yMin - targetRect.center.y;
        }

        anchor.left = left / parentWorldScale;
        anchor.bottom = bottom / parentWorldScale;
        anchor.right = right / parentWorldScale;
        anchor.top = top / parentWorldScale;
    },

    updateLayoutPosition: function () {
        if (!this.layoutTarget || !this.layoutAnchor) return;

        var targetRect = getNodeWorldBounds(this.layoutTarget);

        var wrapper = Fire(this);
        var anchor = this.layoutAnchor;
        var parentWorldScale = wrapper.parent.worldScale.x;

        var anchorLeft = anchor.left * parentWorldScale;
        var anchorRight = anchor.right * parentWorldScale;
        var anchorTop = anchor.top * parentWorldScale;
        var anchorBottom = anchor.bottom * parentWorldScale;

        var left = 0;
        if (anchor.leftAlign === HorizontalAlignType.TargetLeft) {
            left = targetRect.xMin + anchorLeft;
        }
        else if (anchor.leftAlign === HorizontalAlignType.TargetRight) {
            left = targetRect.xMax + anchorLeft;
        }
        else if (anchor.leftAlign === HorizontalAlignType.TargetCenter) {
            left = targetRect.center.x + anchorLeft;
        }

        var right = 0;
        if (anchor.rightAlign === HorizontalAlignType.TargetLeft) {
            right = targetRect.xMin + anchorRight;
        }
        else if (anchor.rightAlign === HorizontalAlignType.TargetRight) {
            right = targetRect.xMax + anchorRight;
        }
        else if (anchor.rightAlign === HorizontalAlignType.TargetCenter) {
            right = targetRect.center.x + anchorRight;
        }

        var top = 0;
        if (anchor.topAlign === VerticalAlignType.TargetBottom) {
            top = targetRect.yMin + anchorTop;
        }
        else if (anchor.topAlign === VerticalAlignType.TargetTop) {
            top = targetRect.yMax + anchorTop;
        }
        else if (anchor.topAlign === VerticalAlignType.TargetCenter) {
            top = targetRect.center.y + anchorTop;
        }

        var bottom = 0;
        if (anchor.bottomAlign === VerticalAlignType.TargetBottom) {
            bottom = targetRect.yMin + anchorBottom;
        }
        else if (anchor.bottomAlign === VerticalAlignType.TargetTop) {
            bottom = targetRect.yMax + anchorBottom;
        }
        else if (anchor.bottomAlign === VerticalAlignType.TargetCenter) {
            bottom = targetRect.center.y + anchorBottom;
        }

        var x = (right - left) *  this.anchorX + left;
        var y = (top - bottom) *  this.anchorY + bottom;

        var w = (right - left) / parentWorldScale;
        var h = (top - bottom) / parentWorldScale;

        if (anchor.autoResize) {
            this.setContentSize(w, h);
        }

        anchor.width = w;
        anchor.height = h;

        wrapper.worldPosition = Fire.v2(x, y);
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame
    update: function (dt) {

    },
});
