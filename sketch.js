var speed, weight, thickness;
var car, wall;
var deformation;



function setup() {
  createCanvas(1600,400);
  
  car = createSprite(50, 200, 20, 10);
  car.shapeColor="white";
  wall = createSprite(1200,200,thickness,height/2);

speed=random(0,15);
weight=random(400,1500);
thickness=random(22,83);

car.velocityX = speed;

}

function draw() {
  background("black");
  
  if(wall.x-car.x < (car.width+wall.width)/2) {
  car.velocityX=0;
   deformation = 0.5 * weight * speed * speed ;
   
   if(deformation>10){
    wall.shapeColor="red";  
    }
  if(deformation<10){
  wall.shapeColor="green";  
  }
  } 
drawSprites();
  }