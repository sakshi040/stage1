const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bg;
var ground;
var brick1,brick2,brick3,brick4,brick5,brick8;
var engine,world;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;
var player,player_img,player_img1;

function preload(){
bg=loadImage("images/brick wall.png")
player_img=loadImage('images/main player 2.png')
// player_img1=loadAnimation('walk.png','walk2.png','walk3.png','walk2.png')
}

function setup(){
createCanvas (1040,480)
    engine=Engine.create()
    world=engine.world;

ground=new Ground(520,470,1040,30)
brick1=new Brick(160,400,100,30)
brick2=new Brick(270,350,100,30) 
brick3=new Brick(390,300,100,30) 
brick4=new Brick(500,250,100,30) 
brick5=new Brick(650,350,100,30) 
brick6=new Brick(750,280,100,30) 
brick7=new Brick(890,190,100,30) 
brick8=new Brick(990,400,100,30) 

obstacle1=new Obstacle(200,440,150,60) 
obstacle2=new Obstacle(340,440,150,60) 
obstacle3=new Obstacle(480,440,150,60) 
obstacle4=new Obstacle(620,440,150,60) 
obstacle5=new Obstacle(760,440,150,60) 
obstacle6=new Obstacle(900,440,150,60) 

player=createSprite(160,400,100,150)
player.addImage(player_img)
}

function draw(){
background(bg);
Engine.update(engine);
ground.display();
brick1.display();
brick2.display();
brick3.display();
brick4.display();
brick5.display();
brick6.display();
brick7.display();
brick8.display();

obstacle1.display();
obstacle2.display();
obstacle3.display();
obstacle4.display();
obstacle5.display();
obstacle6.display();

}