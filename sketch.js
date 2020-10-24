
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var bobDiameter = 40;

	bob1 = new Bob (320, 500);
	bob2 = new Bob (360, 500);
	bob3 = new Bob (400, 500);
	bob4 = new Bob (440, 500);
	bob5 = new Bob (480, 500);

	roof = new Roof (400, 200, 600, 20);
	
	rope1= new Rope(bob3.bob, roof1.body, bobDiameter*2,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  	bob1.display();
  	bob2.display();
 	bob3.display();
  	bob4.display();
 	bob5.display();

	roof1.display();
	
	rope1.display();
  drawSprites();
 
}

function keyPressed() {
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:45,y:-45});
}



