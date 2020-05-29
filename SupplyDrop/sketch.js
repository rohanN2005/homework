const Engine = Matter.Engine;
const World= Matter.World;

var movingRect, stillRect;
var engine, world;
//var weight = -1;
function setup() {
  createCanvas(800,600);
  stillRect = createSprite(400,590, 800, 50);
  movingRect = createSprite(200,200,60,50);
  ground = createSprite(200,395, 400,10)
  ground.shapeColor = 'grey';
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

  movingRect.velocityY = 4


  //isTouching();

  movingRect.restitution  = 0.8
  ground.restitution  = 0
 
  drawSprites();

 
}

function isTouching() {
  if (Math.abs(movingRect.x - stillRect.x) <= (stillRect.width/2 + movingRect.width/2)) {
    movingRect.shapeColor = 'green';
    stillRect.shapeColor = 'red';
    
   }
    if(weight == -1){
      weight =  Math.floor((Math.random() * 5000) + 1000);
    }

    var output = calculateDef(weight)
}

    /*movingRect.velocityX = 0;
    text(output,200,200)
  }
} 
function calculateDef(currweight) {
   return (movingRect.velocityX * movingRect.velocityX * 0.5 * currweight)/22500
}*/