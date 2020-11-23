var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  wall=createSprite(1200, 200, thickness, height/2);
  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,52);
  bullet=createSprite(50,200,25,4);
  bullet.shapeColor="white"
  bullet.velocityX=speed;
}

function draw() {
  background(0); 
  if (bullet.isTouching(wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor="green";
    }

    if(damage<10)
    {
      wall.shapeColor="red";
    }
  }

  drawSprites();
}
