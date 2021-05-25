var rocket;
var xSpeed,ySpeed;
var fire = [];
var smoke = [];
var dust = [];
var enemies = [];
var stars = [];
var fuelCount;
var score;
function preload(){

}
function setup() {
  createCanvas(900, 500);
  xSpeed = 0;
  ySpeed = -0;

  rocket = new Rocket(300,350,133,39);

  fuelCount = 200;

   score = 0;
  
}

function draw() {
  clear()

  // background("#ff99ff");
 push()
 colorMode(HSB);
  for(var a = 0; a < 360; a ++){ 
    background((a + frameCount * 2) % 360, 255, 255);
  }
  
  pop();

 
  rocket.move(xSpeed,ySpeed);
  rocket.update();
  //console.log(ySpeed)

  keyControl();
  starStart();
  enemyStart();
  fireStart();
 
  displayScore();
  
  rocket.display();
 
}








