
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;

// function preload()
// {
	
// }

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	bobDiameter=40;

	startBobPositionX = width/2;
	startBobPositionY = height/4+500;

	//Create the Bodies Here.
	bobobject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobobject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobobject3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobobject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobobject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	roofobj=new roof(width/2,height/4,width/7,20);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	
	 Rope1=new rope(bobobject1.body,roofobj.body,-bobDiameter*2,0);
	 Rope2=new rope(bobobject2.body,roofobj.body,-bobDiameter*1,0);
	 Rope3=new rope(bobobject3.body,roofobj.body,-bobDiameter*0,0);
	 Rope4=new rope(bobobject4.body,roofobj.body,-bobDiameter*-1,0);
	 Rope5=new rope(bobobject5.body,roofobj.body,-bobDiameter*-2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  roofobj.display();
  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW) {
    
		Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-50,y:-45});
	   
	  }
}

function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}