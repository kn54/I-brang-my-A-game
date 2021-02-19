function preload() {
  this.load.image('player', 'assets/Lucy.png');
  this.load.image('background', 'assets/STAR.jpg');
  this.load.image('jack', 'assets/Jack_Frost.png');
 
}

function create() {
  this.add.image(100, 200, 'background');

  // Jack 
 this.jack = this.physics.add.image(config.width / 2, config.height / 2, 'jack').setScale(0.125
 , 0.125);
  this.jack.setCollideWorldBounds(true);






  this.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  this.a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  this.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  this.d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

  // player (Lucy)
  this.player = this.physics.add.image(config.width / 2, config.height / 2, 'player').setScale(0.09, 0.09);
  this.player.setCollideWorldBounds(true);


}


function update() { 
  // PLAYER CONTROLS
   let cursors = this.input.keyboard.createCursorKeys();

  if ((cursors.left.isDown || this.a.isDown) || (cursors.right.isDown || this.d.isDown)) {
    this.player.setVelocityX(cursors.left.isDown || this.a.isDown ? -160 : 160);
  }
  else {
    this.player.setVelocityX(0);
  }

  if ((cursors.up.isDown || this.w.isDown) || (cursors.down.isDown || this.s.isDown)) {
    this.player.setVelocityY(cursors.up.isDown || this.w.isDown ? -160 : 160);
  }
  else {
    this.player.setVelocityY(0);
  }

  let xdiff = (this.player.x-this.jack.x);
  let ydiff = (this.player.y-this.jack.y);

  if (xdiff*xdiff + ydiff*ydiff > 3000) {
    this.jack.setVelocityX(this.player.x > this.jack.x ? 120 : -120);
  } else {
    this.jack.setVelocityX(0);
  }

}



const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 400,
  backgroundColor: '#f9f9f9',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0
      },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);