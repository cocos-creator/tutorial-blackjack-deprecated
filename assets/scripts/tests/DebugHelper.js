// here we put global helper variable

// declare getter for BettingCounter node
Object.defineProperty(window, 'debug_player', {
    get: function() {
        return Fire.find('/playerLayer/anchors/player2');
    },
    configurable: true
});
