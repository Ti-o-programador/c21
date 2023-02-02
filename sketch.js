
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var groundObj,wall1,wall2;
var ball;



function preload() {

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj = new Ground(width / 2, 670, width, 20);
	wall1 = new Ground(600, 600, 20, 120);
	wall2 = new Ground(780, 600, 20, 120);

	ball=Bodies.circle(100,650,40);
	World.add(world,ball);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	groundObj.show();
	wall1.show();
	wall2.show();

	ellipse(ball.position.x,ball.position.y,40);

	drawSprites();

}

function keyPressed() {
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.17,y:-0.3});
	}
}



