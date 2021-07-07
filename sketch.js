const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var astro, astroI1, astroI2, astroI3, astroI4, astroI5, astroI6, iss, issO;

let engine;
let world; 



function preload(){
  iss = loadImage("iss.png");
  astroI1 = loadImage("sleep.png");
  astroI2 = loadImage("brush.png");
  astroI3 = loadImage("gym11.png");
  astroI4 = loadImage("bath1.png");
  astroI5 = loadImage("eat1.png");
  astroI6 = loadImage("move.png");

}


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  issO = createSprite(400, 200);
  issO.addImage(iss);
  issO.scale = 0.2;

  astro = createSprite(400, 200);
  astro.addImage(astroI1);
  astro.scale = 0.1;




}

function draw() {

  Engine.update(engine);

  background(0);  

  if(keyDown("up")){
    astro.addImage(astroI2);
    astro.setVelocity(0,0);
  }

  if(keyDown("down")){
    astro.addImage(astroI3);
    astro.setVelocity(0,0);
  }

  if(keyDown("left")){
    astro.addImage(astroI4);
    astro.setVelocity(0,0);
  }

  if(keyDown("right")){
    astro.addImage(astroI5);
    astro.setVelocity(0,0);
  }

  if(keyDown("m")){
    astro.addImage(astroI6);
    astro.velocityX =0.5;
    astro.velocityY =-0.5; 

  }

  drawSprites();
  var edges = createEdgeSprites();
  astro.bounceOff(edges);
}