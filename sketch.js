var Dustbin1,Dustbin2,Dustbin3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()

{

	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

  
	
	engine = Engine.create();
	world = engine.world;
	
	
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
   Engine.run(engine);
                      
   Engine.run(engine); 

  Dustbin1 = new Dustbin(543,620,15,80);
  Dustbin2 = new Dustbin(590,653,80,15);
  Dustbin3 = new Dustbin(637,620,15,80);
  
	
	var crumpled_options ={
    isStatic:false,
    restitution:0.3,
friction:1.2,
density:1.2
  }


crumpled=Bodies.circle(200,400,2,crumpled_options)
  World.add(world,crumpled)
}


function draw() {
  rectMode(CENTER);
  background(0);
  Dustbin1.display();
  Dustbin2.display();
  Dustbin3.display();
  ellipseMode(RADIUS);
  ellipse(crumpled.position.x, crumpled.position.y, 20, 20);
  keyPressed();
  drawSprites();
 
}
function keyPressed(){

  if(keyCode === UP_ARROW){
  
Matter.crumpled.applyForce(crumpled,crumpled.body.position,{x:85,y:-85})
  
  }
  
  
}  





