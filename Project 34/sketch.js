
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){

}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	

	bobObject1 = new Bob(210);
	bobObject2 = new Bob(300);
	bobObject3 = new Bob(390);
	bobObject4 = new Bob(480);
	bobObject5 = new Bob(570);

	sling1 = new Rope(bobObject1.body, roof.body, -180, 0);
	sling2 = new Rope(bobObject2.body, roof.body, -90, 0);
	sling3 = new Rope(bobObject3.body, roof.body, -0, 0);
	sling4 = new Rope(bobObject4.body, roof.body, 90, 0);
	sling5 = new Rope(bobObject5.body, roof.body, 180, 0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  
  drawSprites();
 
}



