Game.MainMenu = function(game){
    
};

Game.MainMenu.prototype = {
    create: function() {
        this.music = this.game.add.audio('west');
        this.music.play();
        
        this.titlescreen = this.game.add.sprite(0, 0, 'titlescreen');
        this.titlescreen.scale.setTo(0.45,0.55);
        
        this.createbutton(this.game, 'Play', this.game.world.centerX, this.game.world.centerY + 32, 300, 100, function(){this.music.stop(); this.state.start('Play')});
    },
    
    update: function() {
        
    },
    
    createbutton: function(game,string,x,y,w,h,callback) {
        var button_1 = game.add.button(x, y, 'button', callback, this, 2, 1, 0);
        button_1.anchor.setTo(0.5,0.5);
        button_1.width = w;
        button_1.height = h;
        
        var txt = game.add.text(button_1.x, button_1.y, string, {font:"32px Arial", fill:"#FFF", align:"center"});
        txt.anchor.setTo(0.5,0.5);
        
    }
};