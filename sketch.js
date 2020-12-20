var movingRect,fixedRect

function setup() {
  createCanvas(1200,800);
  // fixedRect=createSprite(200, 200, 50, 80);
  // fixedRect.shapeColor="green";
  // movingRect=createSprite(400,200,80,30);
  // movingRect.shapeColor="green";

  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  // gameObject1 = createSprite(100, 100, 50, 50);
  // gameObject1.shapeColor = "green";
  // gameObject2 = createSprite(200, 100, 50, 50);
  // gameObject2.shapeColor = "green";
  // gameObject3 = createSprite(300, 100, 50, 50);
  // gameObject3.shapeColor = "green";
  // gameObject4 = createSprite(400, 100, 50, 50);
  // gameObject4.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
  // movingRect.x=World.mouseX;
  // movingRect.y=World.mouseY; 
   
  bounceOff(movingRect,fixedRect);
    
  //  if(isTouching(movingRect, gameObject4)){
  //   movingRect.shapeColor = "blue";
  //   gameObject4.shapeColor = "blue";
  // }
  // else {
  //   movingRect.shapeColor = "green";
  //   gameObject4.shapeColor = "green";
  // }

  drawSprites();
}

