Game.Preloader = function(game){ 
    this.preloadBar = null;
};

Game.Preloader.prototype = {
    preload: function() {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5,0.5);
        this.time.advancedTiming = true;
        this.load.setPreloadSprite(this.preloadBar);
        
        //Load all assets
        this.game.load.image('sw', 'assets/bg/sw.png');
        this.game.load.image('gunman_1','assets/chs/gunman_1.png');
        this.game.load.image('gunman_2','assets/chs/gunman_2.png');
        this.game.load.image('bullet','assets/other/bullet.png');
        
    },
    
     create: function() {
        this.state.start('Play');
    }
};