Game.Options = function(game){
    
};

Game.Options.prototype = {
    create: function() {
        
        this.createRedButton(this.game, 'Back', this.game.world.centerX, this.game.world.centerY + 142, 300, 100, function(){this.state.start('MainMenu');}, {font:"32px Arial", fill:"#FFF", align:"center"});
        this.createRedButton(this.game, 'Stop', this.game.world.centerX, this.game.world.centerY + 32, 300, 100, function(){Game.mainMusic.stop();}, {font:"32px Arial", fill:"#FFF", align:"center"});

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