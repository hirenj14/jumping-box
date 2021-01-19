var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
  //create 4 different surfaces
  surface1= createSprite(60,590,180,15);
  surface1.shapeColor="blue";
  surface2= createSprite(250,590,180,15);
  surface2.shapeColor="orange";
  surface3= createSprite(450,590,180,15);
  surface3.shapeColor="red";
  surface4=createSprite(670,590,200,15);
  surface4.shapeColor="green";
  //create box sprite and give velocity
  box= createSprite(random(20,270));
  box.shapeColor="white";
  box.velocityY= 7;
  box.velocityX=7;
}

function draw() {
    background(rgb(169,169,169));
   createEdgeSprites();
  //add condition to check if box touching surface and make it box
  if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor="blue";
  }
  if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor="orange";
  }
  if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor="red";
  }
  if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor="green";
  }


    drawSprites();
}
