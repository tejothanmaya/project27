var hammer;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane,sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10,stone,plane, iron ,rubber;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);
	//World.Body(plane,isStatic:false);
	engine = Engine.create();
	world = engine.world;
	//hammer = createSprite(this.x,this.y,this.width,this.height,options);
//	hammer = new Hammer(500,500,this.width,this.height,options);
	
//	hammer.shapeColor = "yellow";
plane = new Plane(600,770,1200,400);
stone = new Stone(150,150,100,200,PI/2);
iron = new Iron(300,100);
rubber = new Rubber(700,100,70);
hammer = new Hammer(1100,100);
sand1 = new Sand(505,450,10);
sand2 = new Sand(510,450,10);
sand3 = new Sand(515,450,10);
sand4 = new Sand(520,450,10);
sand5 = new Sand(525,450,10);
sand6 = new Sand(530,450,10);
sand7 = new Sand(535,450,10);
sand8 = new Sand(540,450,10);
sand9 = new Sand(545,450,10);
sand10 = new Sand(550,450,10);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  hammer.display();
  plane.display();
  stone.display();
  iron.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  drawSprites();
 
}



