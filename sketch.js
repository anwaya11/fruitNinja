var PLAY=1;
var END=0;
var gameState = 1;

var sword;
var fruit1;
var fruit2;
var fruit3;
var fruit4;
var alien1;
var enemy11;
var gameover

var gameOverSound,knifeswooshSound;

var fruitsGroup;
var enemyGroup;

var score=0; 

function preload(){
  
  sword1 = loadImage("sword.png");
  fruit11 = loadImage("fruit1.png");
  fruit22 = loadImage("fruit2.png");
  fruit33 = loadImage("fruit3.png");
  fruit44 = loadImage("fruit4.png");
  monster=loadAnimation("alien1.png","alien2.png");
  //enemy22 = loadImage("alien2.png");
  gameOver12 = loadImage("gameover.png");
  gameOverSound = loadSound("gameover.mp3");
  knifeswooshSound = loadSound("knifeSwooshSound.mp3");
  
  
}


function setup(){
  
  createCanvas(600,550)
  
  sword = createSprite(100,300,100,100);
  sword.addImage(sword1);
  sword.scale = 0.7;
  
  
  
  fruitsGroup = createGroup();
  enemysGroup = createGroup();
  
  sword.setCollider("rectangle",0,0,120,120);
  
}



function draw(){

  background("lightblue");
  
  text("score="+score,500,30);
  
  
  //sword.visible=false;       
  
  if(gameState===PLAY){

     fruits();
     enemys();
    //sword.visible=true;
    sword.x = World.mouseX;
    sword.y = World.mouseY;
  
       if(fruitsGroup.isTouching(sword)){
    fruitsGroup.destroyEach();
    score=score+1;
     knifeswooshSound.play();    
  
    }
    
  
  else
  {
    
    if(enemysGroup.isTouching(sword)){
      gameState=END
      fruitsGroup.destroyEach();
      enemysGroup.destroyEach();
      //sword.visible=false;
      //sword.addImage(sword1); 
      sword.addImage(gameOver12);
      enemysGroup.velocityX=0;
      fruitsGroup.velocityX=0;
      enemysGroup.setVelocityXEach(0);
      fruitsGroup.setVelocityXEach(0);
      gameOverSound.play();
      
    }
    
  }
  
  }
  
  
  
  
  drawSprites();
}

function fruits(){
  
   if(World.frameCount%80===0){
   fruit = createSprite(200,200,10,10);
   fruit.scale=0.2;
     
   r=Math.round(random(1,4));
   
     if(r==1){
       fruit.addImage(fruit11)
     }
     else if (r==2) {
       fruit.addImage(fruit22)
     }
     else if (r==3) {
       fruit.addImage(fruit33)
     }
     else if (r==4) {
       fruit.addImage(fruit44)
     }
     
     fruit.y=Math.round(random(50,340));
     fruit.x=Math.round(random(550,600));
     
     fruit.velocityX=-(7+(score/4));
     fruit.setLifetime=10;
     
      fruitsGroup.add(fruit);
     
  position = Math.round(random(1,2));
  
  if(position==1){
    fruit.x=400;
    fruit.velocityX=-(7+(score/4));
  }
  else{
    if(position==2){
      fruit.x=0;
      fruit.velocityX=(7+(score/4));
    }
  }
    
    
 
}
  
   }
  
  
function enemys(){
  if(World.frameCount%120===0){
    position = Math.round(random(1,2))
    enemy=createSprite(400,200,20,20);
    enemy.addAnimation("moving",monster);
    enemy.x=Math.round(random(450,500));
    enemy.y=Math.round(random(100,400));
    enemy.velocityX=-(8+(score/10));
    enemy.setLifetime=50;
    
    enemysGroup.add(enemy);
    
    if(position==1){
      enemy.x=400;
      enemy.velocityX=-(7+(score/4));
    }
    else{
       if(position==2){
      enemy.x=0;
      enemy.velocityX=(7+(score/4));
    }
  }
  
}
}




