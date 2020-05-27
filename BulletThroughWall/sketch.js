const Engine = Matter.Engine;
const World= Matter.World;

var movingRect, stillRect;
var engine, world;
var speed;
var thickness;
var thicknessandspeedMade = false;

var weight = -1;
function setup() {
  createCanvas(1600,400);
  stillRect = createSprite(1200 ,200, thickness, height/2);
  movingRect = createSprite(200,200,60,50);
  //object1 = createSprite(300,100,30,10);
  //object2 = createSprite(300,500,10,30);
  
  //object2.velocityY = -6

  engine = Engine.create();
    world = engine.world;
  World.add(world,movingRect);
  World.add(world,stillRect);
  
}

function draw() {
  background("blue");  
  Engine.update(engine);

  //movingRect.y = mouseY;
  //movingRect.x = mouseX;




  if(!thicknessandspeedMade){
    speed = random(223,300)
    thickness = random(23,81)
    thicknessandspeedMade = true
  }
  movingRect.velocityX = speed

  console.log(thickness)
  console.log(thicknessandspeedMade)


  isTouching();
 
  drawSprites();

 
}

function isTouching() {
  if (Math.abs(movingRect.x - stillRect.x) <= (stillRect.width/2 + movingRect.width/2)) {
   
    movingRect.shapeColor = 'green';
    stillRect.shapeColor = 'red';
    if(weight == -1){
      weight =  Math.floor((Math.random() * 52) + 30);
    }

    var output = calculateDam(weight)

    movingRect.velocityX = 0;
    text(output,200,200)
  }
} 
function calculateDam(currweight) {
   return (movingRect.velocityX * movingRect.velocityX * 0.5 * currweight)/(thickness * thickness * thickness)
}
