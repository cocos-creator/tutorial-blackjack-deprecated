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

        tempImage: {
            default: '',
            url: Fire.Texture
        }
    },

    // use this for initialization
    onLoad: function () {
        var baseUrl = this.tempImage.replace('user-image2.png', '');

        var names = [
            '燃烧吧，蛋蛋儿军',
            '地方政府',
            '手机超人',
            '天灵灵，地灵灵',
            '哟哟，切克闹',
            '我的神啊'
        ];

        for (var i=0; i<6; i++) {
            var info = {};
            info.name = names[i];
            info.photo = baseUrl + 'user-image' + (i+2) + '.png';
            info.gold = Math.random() * 1000 | 0;
            info.rank = i + 1;

            this.addPlayer(info);
        }
    },

    // called every frame
    update: function (dt) {

    },
});
