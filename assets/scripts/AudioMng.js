cc.Class({
    extends: cc.Component,

    properties: {
        winAudio: {
            default: null,
            type: cc.AudioClip
        },

        loseAudio: {
            default: null,
            type: cc.AudioClip
        },

        cardAudio: {
            default: null,
            type: cc.AudioClip
        },

        buttonAudio: {
            default: null,
            type: cc.AudioClip
        },

        chipsAudio: {
            default: null,
            type: cc.AudioClip
        },

        bgm: {
            default: null,
            type: cc.AudioClip
        }
    },

    playMusic: function() {
        cc.audioEngine.playMusic( this.bgm, true );
    },

    pauseMusic: function() {
        cc.audioEngine.pauseMusic();
    },

    resumeMusic: function() {
        cc.audioEngine.resumeMusic();
    },

    _playSFX: function(clip) {
        cc.audioEngine.playEffect( clip, false );
    },

    playWin: function() {
        this._playSFX(this.winAudio);
    },

    playLose: function() {
        this._playSFX(this.loseAudio);
    },

    playCard: function() {
        this._playSFX(this.cardAudio);
    },

    playChips: function() {
        this._playSFX(this.chipsAudio);
    },

    playButton: function() {
        this._playSFX(this.buttonAudio);
    }
});
