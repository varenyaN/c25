
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper1;

function setup() {
	createCanvas(1600, 700);
	


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper1=new Paper (200,450,70)

	Engine.run(engine);
  
}


function draw() {
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paper1.display();

}
function keyPressed(){
	if(keyCode ===UP_ARROW){

		Matter .Body.applyForce(paper1.body,{x:0,y:0},{x:130,y:-145})
	}
}                                                            

