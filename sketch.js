var bullet,wall,speed,weight;
function setup() {
  createCanvas(1600,400);
  thickness=random(20,50)
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor=color(80,80,80)
  speed=random(55,90)
  weight=random(400,1500)
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if (deformation>10){
      bullet.shapeColor=color(255,0,0)
    }
    
    if (deformation<10){
      bullet.shapeColor=color(0,255,0);
    }
  }
  

  drawSprites();
}