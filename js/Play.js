Game.Play = function(game){
    
};

Game.Play.prototype = {
    create: function() {
        //BG
        this.backgroud = this.game.add.image(-540,-400,'sw');
        
        //Player 1
        this.sprite_1 = this.add.sprite(150, 400, 'gunman_1');
        this.sprite_1.anchor.set(0.5);
        this.game.physics.arcade.enable(this.sprite_1);
        this.sprite_1.body.drag.set(70);
        this.sprite_1.body.maxVelocity.set(200);
            
        //Player 2
        this.sprite_2 = this.add.sprite(640, 400, 'gunman_2');
        this.sprite_2.scale.x = -1; //Reverse
        this.sprite_2.anchor.set(0.5);
        this.game.physics.arcade.enable(this.sprite_2);
        this.sprite_2.body.drag.set(70);
        this.sprite_2.body.maxVelocity.set(200);
            
        //Weapon_1
        this.weapon_1 = this.game.add.weapon(1, 'bullet');
        this.weapon_1.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        this.weapon_1.bulletSpeed = 1200;
        this.weapon_1.fireRate = 600;
        this.weapon_1.bulletAngleOffset = 0;
        this.weapon_1.trackSprite(this.sprite_1, 150, -70, false);
        this.weapon_1.fireAngle = Phaser.ANGLE_RIGHT;
        this.fireButton_1 = this.input.keyboard.addKey(Phaser.KeyCode.A);
            
        //Weapon_2
        this.weapon_2 = this.game.add.weapon(1, 'bullet');
        this.weapon_2.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        this.weapon_2.bulletSpeed = 1200;
        this.weapon_2.fireRate = 600;
        this.weapon_2.bulletAngleOffset = 0;
        this.weapon_2.trackSprite(this.sprite_2, -150, -70, false);
        this.weapon_2.fireAngle = Phaser.ANGLE_LEFT;
        this.fireButton_2 = this.input.keyboard.addKey(Phaser.KeyCode.L);
        
        //Sounds effects
        this.shoot_1 = this.game.add.audio('shoot');
        this.shoot_2 = this.game.add.audio('shoot');
        
    },
    
    update: function() {
        if (this.fireButton_1.isDown) {
            if (this.shoot_1.isPlaying) {
                this.shoot_1.stop();
            }
            this.weapon_1.fire();
            this.shoot_1.play();
        }
        if (this.fireButton_2.isDown) {
            if (this.shoot_2.isPlaying) {
                this.shoot_2.stop();
            }
            this.weapon_2.fire();
            this.shoot_2.play();
        }
            
    }
};