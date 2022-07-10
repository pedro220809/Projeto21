
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var leftSide
var rightSide
var ground
var ball

let engine;
let world;
var ball;
var ground
var btm

function preload()
{
	
}

function setup() {

	createCanvas(1000, 600);
	engine = Engine.create();
	world = engine.world;

	btm = createImg("right.png")
	btm.position(220,30)
	btm.size(50,50)
	btm.mouseClicked( mudarForcas)
	
    var ball_options={
	//	isStatic:false,
		restitution:0.3,
		friction:0
		//,
		//density:1.2,
	}

    ball = Bodies.circle(100, 500, 20, ball_options)
	World.add(world,ball)

	leftSide = new Ground(600,540,20,200)
	rightSide = new Ground(900,540,20,200)
	ground = new Ground(600,590,1200,20)

	rectMode(CENTER);
	ellipseMode(RADIUS)
	
	//Create the Bodies Here.
 }


function draw() {

  background(0);
  Engine.update(engine);

  //drawSprites();
 
  ellipse(ball.position.x,ball.position.y,20)

  rightSide.display()
  leftSide.display()
  ground.display()
  
//ball.display()

}






function hForce() {
	//alert("entrou no hforce")
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  }
  function vForce() {
	//alert("entrou no vforce")
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.06});
  }

  function mudarForcas() {
	hForce();
	vForce();
  }