
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png")
}


function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200)
  sea.addImage(seaImg)
  ship = createSprite(130,200,3030)
  ship.addAnimation("movingShip",shipImg1)
  ship.scale = 0.3
  sea.scale = 0.3
}

function draw() {
  background("blue");
 sea.velocityX =- 3
if(sea.x < 0){
  sea.x = sea.width/8;
  
}

drawSprites()
}