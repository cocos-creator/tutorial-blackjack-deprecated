Fire.Class({
    extends: Fire.Behavior,

    properties: {
        // foo: {
        //    default: null,
        //    type: Fire.Texture, // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        //    wrapper: cc.Node    // optional
        // },
        // ...

        playerTemplate: {
            default: null,
            type: cc.Node
        },

        trophy1: {
            default: '',
            url: Fire.Texture
        },

        trophy2: {
            default: '',
            url: Fire.Texture
        },

        trophy3: {
            default: '',
            url: Fire.Texture
        },

        trophy4: {
            default: '',
            url: Fire.Texture
        }
    },

    addPlayer: function (info) {
        var player = Fire.instantiate(this.playerTemplate);

        player.visible = true;

        Fire.find('player-name', player).string = info.name;
        Fire.find('player-gold', player).string = info.gold;
        Fire.find('player-border/player-photo', player).texture = info.photo;

        var rank = Fire.find('player-rank', player);
        rank.setVisible(false);
        var trophy = Fire.find('trophy', player);
        var trophyUrl;
        if (info.rank === 1) {
            var p = player.getLayoutParameter();
            var margin = p.getMargin();
            margin.top = -40;
            p.setMargin(margin);

            trophyUrl = this.trophy1;
        }
        else if (info.rank === 2) trophyUrl = this.trophy2;
        else if (info.rank === 3) trophyUrl = this.trophy3;
        else {
            trophyUrl = this.trophy4;
            rank.string = info.rank;
            rank.setVisible(true);
        }

        trophy.loadTexture(trophyUrl);

        this.addChild(player);

        var size = this.getInnerContainerSize();
        this.setInnerContainerSize(cc.size(size.width, this.children.length * 80+10));
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame
    update: function (dt) {

    },
});
