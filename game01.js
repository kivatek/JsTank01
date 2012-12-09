enchant();

var Tank = Class.create(Sprite, {
	initialize: function(type,dir){
		Sprite.call(this, 32, 32);
		this.image = game.assets['js/images/chara3.png'];
		if (type == 0) {
			this.frame = 0;
		} else {
			this.frame = 3;
		}
	}
});

window.onload = function() {
	
	game = new Game(320, 320);
	
	game.fps = 24;
	game.touched = false;
	game.preload('js/images/chara3.png');
	
	game.onload = function() {
		game.currentScene.backgroundColor = 'rgb(208, 255, 255)';

		var myTank = new Tank(0, 0);
		game.currentScene.addChild(myTank);
		myTank.x = 128;
		myTank.y = 160;
		var teki = new Tank(1, 0);
		game.currentScene.addChild(teki);
		teki.x = 192;
		teki.y = 160;
	};
	game.start();
};