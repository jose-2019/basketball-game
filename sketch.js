const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var player1,player2
var player2Img,ball2
var basket;
var playerdribbling,playershooting;
var basketState="down";
var player1Score=0
var player2Score=0;

function preload(){

  playerdribbling=loadImage("playerdribbling.png");
  playershooting=loadImage("playershooting.png");
  player2Img=loadImage("player2.png");

}

function setup() {
  createCanvas(1800,600);

	engine = Engine.create();
	world = engine.world;

  ground= new Ground(780,550,1700,25);
  ball=new Ball(470,315,50);
  ball2=new Ball(640,310,20);
  wall=new Ground(1200,300,20,600);
  basket=new Basket(1100,150,1);
  game=new Game();

}

function draw() {

	Engine.update(engine);

  background(255,255,255);  

  drawSprites();

  ball.display();

  ball2.display();

  fill("red");
text("player1",ball.body.position.x,ball.body.position.y);

fill("green");
text("player2",ball2.body.position.x,ball2.body.position.y);

basket.display();

console.log(basket.body.position.y);


  wall.display();

  ground.display();

//detectCollision(ball,basket);

text("Player1Score  : "+player1Score,100,100);
text("player2Score  : "+player2Score,100,200);

if(ball.body.position.x===basket.body.position.x && ball.body.position.y===basket.body.position.y)
{
  player1Score+=1
}
if(ball2.body.position.x===basket.body.position.x && ball2.body.position.y===basket.body.position.y)
{
  player2Score+=1
}
}

function keyPressed(){

	if(keyCode === UP_ARROW&&ball2.body.position.x===640){

Matter.Body.setStatic(ball.body,false)
Matter.Body.applyForce(ball.body,ball.body.position,{x:0.5,y:-0.3})

  }
if(keyCode === DOWN_ARROW && ball.body.position.x===470){

  Matter.Body.setStatic(ball2.body,false)
  Matter.Body.applyForce(ball2.body,ball2.body.position,{x:0.1,y:-0.06})

}

  
if(keyCode === 32){

Matter.Body.setPosition(ball.body,{x:470,y:315});
Matter.Body.setStatic(ball.body,true)

Matter.Body.setPosition(ball2.body,{x:640,y:310});
Matter.Body.setStatic(ball2.body,true)

}



	}



  /*function detectCollision(lball,lbasket){

    basketBodyPosition=lbasket.body.position
    ballBodyPosition=lball.body.position
    
    var distance=dist(ballBodyPosition.x,ballBodyPosition.y,basketBodyPosition.x,basketBodyPosition.y)
    
    if(distance<=lbasket.r+lball.r){
    
    //Matter.Body.setStatic(lbasket.body,false)
    
console.log("its touching");

    }
    
  }*/


/*Matter.Body.setVelocity(basket.body,{x:0,y:1});

if(keyCode===50){

  Matter.Body.setVelocity(basket.body,{x:0,y:1});
  
  }
  else if(keyCode===49){ 
  
     Matter.Body.setVelocity(basket.body,{x:0,y:-1});
  
  }*/

  //text("OPPONENT PLAYER NEED TO PRESS '1'TO MAKE THE BASKET TO SCROLL UP",100,100);
  //text("OPPONENT PLAYER NEED TO PRESS '2' TO MAKE THE BASKET TO SCROLL DOWN",100,200);
  
  //console.log(  Matter.Detector.canCollide(ball,basket));
  
  /*if(basket.body.position.y>=150){
  
  basketState="down";
  
  }else if(basket.body.position.y>=300){
  
  basketState="up"
  
  }
  
  
  if(basket.body.position.y>=150&&basketState==="down"){
  
    Matter.Body.setVelocity(basket.body,{x:0,y:1});
  
  }else if(basket.body.position.y>=300&&basketState==="up"){
  
    Matter.Body.setVelocity(basket.body,{x:0,y:-1});
  
  }*/
 