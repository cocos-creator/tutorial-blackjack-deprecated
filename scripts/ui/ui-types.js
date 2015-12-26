
var HorizontalAlignType = Fire.defineEnum({
    TargetLeft: -1,
    TargetCenter: -1,
    TargetRight: -1
});

var VerticalAlignType = Fire.defineEnum({
    TargetTop: -1,
    TargetCenter: -1,
    TargetBottom: -1
});

var LayoutAnchor = Fire.Class({
    name: 'LayoutAnchor',
    extends: Fire.EventTarget,

    constructor: function () {
        this._anchorChanged = false;
        this._anchorTypeChanged = false;
    },

    properties: {

        width: {
            default: -1,
            visible: false
        },
        height: {
            default: -1,
            visible: false
        },

        autoResize: {
            default: false,

            notify: function () {
                this._anchorChanged = true;
            }
        },

        leftAlign: {
            default: HorizontalAlignType.TargetLeft,
            type: HorizontalAlignType,

            notify: function () {
                this._anchorTypeChanged = true;
            }
        },
        left: {
            default: 0,

            notify: function () {
                this._anchorChanged = true;
            }
        },

        rightAlign: {
            default: HorizontalAlignType.TargetLeft,
            type: HorizontalAlignType,

            notify: function () {
                this._anchorTypeChanged = true;
            }
        },
        right: {
            default: 0,

            notify: function () {
                this._anchorChanged = true;
            }
        },

        topAlign: {
            default: VerticalAlignType.TargetBottom,
            type: VerticalAlignType,

            notify: function () {
                this._anchorTypeChanged = true;
            }
        },
        top: {
            default: 0,

            notify: function () {
                this._anchorChanged = true;
            }
        },

        bottomAlign: {
            default: VerticalAlignType.TargetBottom,
            type: VerticalAlignType,

            notify: function () {
                this._anchorTypeChanged = true;
            }
        },
        bottom: {
            default: 0,

            notify: function () {
                this._anchorChanged = true;
            }
        }
    }
});

module.exports = {
    HorizontalAlignType: HorizontalAlignType,
    VerticalAlignType: VerticalAlignType,
    LayoutAnchor: LayoutAnchor
}
