const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var ground;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  ground= new Ground(200,200,480,10);
  
}

function draw() {
  background(255,255,255);  

  ground.display();
}