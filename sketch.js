const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11; 
var box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23;
var box24,box25,box26,box27,box28,box29,box31,box32,box33,box34,box35,box36,box37;
var ground,ground1,ground2;
var bg;
var ball ; 
var rope;

function preload(){
  bg = loadImage("sprites/BG.jpg");
}

function setup() {
 createCanvas(2000,700);

 engine = Engine.create();
 world = engine.world;

 //ROW1 LEVEL1
 box1 = new Box(720,400,50,50);
 box2  = new Box(680,400,50,50);
 box3 = new Box(630,400,50,50);
 box4 = new Box(580,400,50,50);
 box5 = new Box(530,400,50,50);
 //ROW2 LEVEL1
 box6 = new Box(670,350,50,50);
 box7 = new Box(620,350,50,50);
 box8 = new Box(570,350,50,50);
 //ROW3 LEVEL1
 box9 = new Box(645,300,50,50);
 box10 = new Box(595,300,50,50);
 //ROW4 LEVEL1
 box11 = new Box(620,250,50,50);
 //ROW1 LEVEL2
 box12 = new Box(1238,295,50,50);
 box13 = new Box(1187,295,50,50);
 box14 = new Box(1136,295,50,50);
 box15 = new Box(1085,295,50,50);
 box16 = new Box(1034,295,50,50);
 box17 = new Box(983,295,50,50);
 //ROW2 LEVEL2
 box18 = new Box(1215,245,50,50);
 box19 = new Box(1164,245,50,50);
 box20 = new Box(1113,245,50,50);
 box21 = new Box(1062,245,50,50);
 box22 = new Box(1011,245,50,50);
 //ROW3 LEVEL2
 box23 = new Box(1205,195,50,50);
 box24 = new Box(1154,195,50,50);
 box25 = new Box(1103,195,50,50);
 box26 = new Box(1052,195,50,50);
 //ROW4 LEVEL2
 box27 = new Box(1185,145,50,50);
 box28 = new Box(1134,145,50,50);
 box29 = new Box(1083,145,50,50);
 //ROW5 LEVEL2
 box30 = new Box(1100,95,50,50);
 box31 = new Box(1154,95,50,50);
 //ROW6 LEVEL2
 box32 = new Box(1130,45,50,50);



 
 


 ground = new Ground(650,670,2800,100);
 ground1 = new Ground(625,450,360,50);
 ground2 = new Ground(1100,340,420,50);
 ball = new Ball(200,280,30);

 rope = new Rope(ball.body,{x:200,y:300}); 

 Engine.run(engine);
}

function draw() {
  background(bg);  

  fill('red');
  textSize(20);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 1400,450);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  ground.display();
  ground1.display();
  rope.display();
  ball.display();
  ground2.display();
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  rope.fly();
}

function keyPressed(){
	if(touches.length>0||keyCode === 32){
	  Matter.Body.setPosition(ball.body,{x:200, y:280});
	  rope.attach(ball.body);
	}
  }