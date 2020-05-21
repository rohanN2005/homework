const Engine = Matter.Engine;
const World= Matter.World;

var movingRect, stillRect;
var engine, world;
function setup() {
  createCanvas(800,600);
  stillRect = createSprite(400,200, 50, 50);
  movingRect = createSprite(200,200,60,50);
  //object1 = createSprite(300,100,30,10);
  //object2 = createSprite(300,500,10,30);
  movingRect.velocityX = 4
  //object2.velocityY = -6

  engine = Engine.create();
    world = engine.world;
  World.add(world,movingRect);
  World.add(world,stillRect);
  
}rr

function draw() {
  background("blue");  
  Engine.update(engine);

  movingRect.y = mouseY;
  movingRect.x = mouseX;

  isTouching();
 
  drawSprites();
}

function isTouching() {
  if (movingRect.x - fixedRect.x == fixedRect.width/2 + movingRect.width/2) {
    movingRect.shapeColor = 'green';
    stillRect.shapeColor = 'blue';
    movingRect.velocityX = 0;
  }
} 
