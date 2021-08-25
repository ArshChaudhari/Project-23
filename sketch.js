const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;

let engine;
let world;

var ball1;
var ball2;
var ball3;
var ball4;
var ball5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

var con1;
var con2;
var con3;
var con4;
var con5;

function setup() {
	createCanvas(800, 600);

	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var ball_options={
    restitution:0.95
	} 
	  roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

    ball1 = Bodies.circle(250,300,23,ball_options);
    World.add(world,ball1);

    ball2 = Bodies.circle(354,350,23,ball_options);
    World.add(world,ball2);
  
    ball3 = Bodies.circle(400,350,23,ball_options);
    World.add(world,ball3);

    ball4 = Bodies.circle(446,350,23,ball_options);
    World.add(world,ball4);

    ball5 = Bodies.circle(492,350,23,ball_options);
    World.add(world,ball5);

    con1 = Matter.Constraint.create({
      pointA:{x:492,y:100},
      bodyB:ball5,
      pointB:{x:0,y:0},
      length:250,
      stiffness:0.1
     })
    World.add(world,con1);
    
    con2 = Matter.Constraint.create({
      pointA:{x:308,y:100},
      bodyB:ball1,
      pointB:{x:0,y:0},
      length:250,
      stiffness:0.1
    })
    World.add(world,con2);
    
    con3 = Matter.Constraint.create({
      pointA:{x:354,y:100},
      bodyB:ball2,
      pointB:{x:0,y:0},
      length:250,
      stiffness:0.1
    })
    World.add(world,con3);
    
    con4 = Matter.Constraint.create({
      pointA:{x:400,y:100},
      bodyB:ball3,
      pointB:{x:0,y:0},
      length:250,
      stiffness:0.1
    })
    World.add(world,con4);
    
    con5 = Matter.Constraint.create({
      pointA:{x:446,y:100},
      bodyB:ball4,
      pointB:{x:0,y:0},
      length:250,
      stiffness:0.1
    })
    World.add(world,con5);
    
	  ellipseMode(RADIUS);
}

function draw(){
  background("#99004d");

  fill("white");
  rectMode(CENTER);

  rect(roof.position.x,roof.position.y,230,20);

  ellipse(ball1.position.x,ball1.position.y,23);
  ellipse(ball2.position.x,ball2.position.y,23);
  ellipse(ball3.position.x,ball3.position.y,23);
  ellipse(ball4.position.x,ball4.position.y,23);
  ellipse(ball5.position.x,ball5.position.y,23);

  strokeWeight(2);
  stroke(255);

  line(con1.pointA.x,con1.pointA.y,ball5.position.x,ball5.position.y);
  line(con2.pointA.x,con2.pointA.y,ball1.position.x,ball1.position.y);
  line(con3.pointA.x,con3.pointA.y,ball2.position.x,ball2.position.y);
  line(con4.pointA.x,con4.pointA.y,ball3.position.x,ball3.position.y);
  line(con5.pointA.x,con5.pointA.y,ball4.position.x,ball4.position.y);
  
  if(keyDown("UP_ARROW")){
    forceonbob();
  }
  
  drawSprites();
  Engine.update(engine);
}

function forceonbob(){
  Matter.Body.applyForce(ball1,{x:0,y:0},{x:-0.05,y:0})
}
