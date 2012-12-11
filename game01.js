enchant();

var Tank = Class.create(Sprite, {
	initialize: function(type,direction){
		Sprite.call(this, 32, 32);
		this.image = game.assets['js/images/chara3.png'];
		if (type == 0) {
			// 緑色の戦車
			this.frame = 0;
		} else {
			// デザートカラーの戦車
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

		// 緑色の戦車（自分用）のスプライトを用意。
		var myTank = new Tank(0, 0);
		// 表示位置の指定
		myTank.x = 128;
		myTank.y = 160;
		
		// デザートカラーの戦車（敵用）のスプライトを用意。
		var teki = new Tank(1, 0);
		// 表示位置の指定
		teki.x = 192;
		teki.y = 160;

		// 用意したスプライトをシーンに関連づける。シーンはスクラッチで言えばステージのこと。
		// これで表示されるようになる。
		game.currentScene.addChild(teki);
		game.currentScene.addChild(myTank);
	};
	game.start();
};
