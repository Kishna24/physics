
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	roof = new Roof(350,50,600,70)

	bob1 = new Bob(150,400,10)
	bob2 = new Bob(250,400,10)
	bob3 = new Bob(350,400,10)
	bob4 = new Bob(450,400,10)
	bob5 = new Bob(550,400,10)
	
	rope1=new Rope(bob1.body,roof.body,0,0)
	

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  	background(0);

	rope1.display();

	roof.display();
  
	bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
  
    drawSprites();
 
}



