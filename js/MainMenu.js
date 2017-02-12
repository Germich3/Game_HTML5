Game.MainMenu = function(game){
    Game.mainMusic = null;
};

Game.MainMenu.prototype = {
    create: function() {
        if (!Game.mainMusic || !Game.mainMusic.isPlaying) {
            Game.mainMusic = this.game.add.audio('west', 1, true);
            Game.mainMusic.play();
        }
        
        this.titlescreen = this.game.add.sprite(0, 0, 'titlescreen');
        this.titlescreen.scale.setTo(0.45,0.55);
        
        this.createRedButton(this.game, 'Play', this.game.world.centerX, this.game.world.centerY + 32, 300, 100, function(){Game.mainMusic.stop(); this.state.start('Play');}, {font:"32px Arial", fill:"#FFF", align:"center"});
        this.createRedButton(this.game, 'Options', this.game.world.centerX, this.game.world.centerY + 142, 300, 100, function(){this.state.start('Options');}, {font:"32px Arial", fill:"#FFF", align:"center"});
        
    },
    
    update: function() {
        
    },
    
    createRedButton: function(game,string,x,y,w,h,callback,aspect) {
        var button_1 = game.add.button(x, y, 'button', callback, this, 2, 1, 0);
        button_1.anchor.setTo(0.5,0.5);
        button_1.width = w;
        button_1.height = h;
        
        var txt = game.add.text(button_1.x, button_1.y, string, aspect);
        txt.anchor.setTo(0.5,0.5);
        
    }
};