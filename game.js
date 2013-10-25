

enchant();
window.onload = function(){
    var game = new Core(320, 320);
    
    game.preload("ignacio_idle.png","ignacio_jump.png","ignacio_move.png","moneda.png","images/apad.png");
    
    game.onload = function(){
        var score = 0;
        
	var pad = new Pad();
	pad.x = 5;
	pad.y = 320 - 95;
	game.rootScene.addChild(pad);
        var marker = new Label(""+score);
        marker.x = 5;
        marker.y = 5;
        game.rootScene.addChild(marker);
        function Moneda(){
            this.moneda = new Sprite(32, 32);
            this.moneda.image = game.assets["moneda.png"];
            this.moneda.addEventListener(Event.ENTER_FRAME, function(){
                this.y += 5;
                if (this.y > 320 || (Math.abs(this.x - ignacio.x)< 16 && Math.abs(this.y- ignacio.y) < 16 )) {
                    if ((Math.abs(this.x - ignacio.x)< 16 && Math.abs(this.y- ignacio.y) < 16 )) {
                        score++;
                        marker.text = "" + score;
                       
                    }
                    game.rootScene.removeChild(this);
                }
                
            })
            this.spawn = function(){
            this.moneda.x = (Math.random()*290);
            this.moneda.y =0;
            game.rootScene.addChild(this.moneda);}
        }
        
        
        
        

        
        var ignacio = new Sprite(32, 32);
        ignacio.x = 320/2;
        ignacio.y = 320 - 32;
        ignacio.image = game.assets["ignacio_idle.png"];
        game.rootScene.addChild(ignacio);
        ignacio.addEventListener(Event.ENTER_FRAME, function(){
            if (this.age%30 === 0) {
            var moneda = new Moneda();
            moneda.spawn();
            }
            
            if (game.input.right) {
                this.scaleX = 1;
                this.image = game.assets["ignacio_move.png"];
                this.x += 3;
            }
            
            else if (game.input.left) {
                this.scaleX = -1;
                this.image = game.assets["ignacio_move.png"];
                this.x -= 3;
            }
        })
    };
    game.start();
};
        