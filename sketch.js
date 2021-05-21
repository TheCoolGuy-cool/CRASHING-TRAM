const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;
var constraint1;
var constraint2;
var constraint3;
var constarint4;
var rock1,rock1_img;
var rock2,rock2_img;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
  rock1_img=loadImage("images/rock1.png");
  rock2_img=loadImage("images/rock.png");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  world= myEngine.world;

  ground = new Ground(600,380,1200,20);
  boggie1=new BogeyClass(300,330);
  boggie2=new BogeyClass(400,330);
  boggie3=new BogeyClass(500,330);
  boggie4=new BogeyClass(600,330);
  boggie5=new BogeyClass(700,330);

  constraint1=new ConstraintClass(boggie1.body,boggie2.body);
  constraint2=new ConstraintClass(boggie2.body,boggie3.body);
  constraint3=new ConstraintClass(boggie3.body,boggie4.body);
  constraint4=new ConstraintClass(boggie4.body,boggie5.body);

  rock1=new Rock(800,330);
  rock2=new Rock(900,330);
  
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  
  boggie1.display();
  boggie2.display();
  boggie3.display();
  boggie4.display();
  boggie5.display();

  constraint1.display();
  constraint2.display();
  constraint3.display();
  constraint4.display();

  rock1.display();
  rock2.display();
}

  
