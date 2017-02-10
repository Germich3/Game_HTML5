Game.Preloader = function(game){
    this.preloadBar = null;
};

Game.Preloader.prototype = {
    preload: function() {
        this.text = this.add.text(this.world.centerX-75, this.world.centerY-80, "Loading...", {font:"32px Arial", fill:"#FFF", align:"center"});
        this.preloadBg = this.add.sprite(this.world.centerX-240, this.world.centerY-30, 'preloaderBg');
        this.preloadBar = this.add.sprite(this.world.centerX-220, this.world.centerY-10, 'preloaderBar');
        this.time.advancedTiming = true;
        this.load.setPreloadSprite(this.preloadBar);
        
        //Load all assets
        this.game.load.image('sw', 'assets/bg/sw.png');
        this.game.load.image('gunman_1','assets/chs/gunman_1.png');
        this.game.load.image('gunman_2','assets/chs/gunman_2.png');
        this.game.load.image('bullet','assets/other/bullet.png');
        
        //Menu assests
        this.game.load.image('titlescreen','assets/menu/bgmenu.png');
        this.game.load.image('button','assets/menu/button.png');
        
    },
    
     create: function() {
        this.state.start('MainMenu');
    }
};