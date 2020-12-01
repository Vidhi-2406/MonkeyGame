
var monkey , monkey_running
var edges;
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,200);  

  //creating monkey
  monkey = createSprite(50,200,20,50);
  monkey.addAnimation("m",monkey_running);
  monkey.scale = 0.1;
  
  //creating ground
 ground = createSprite(300,200,600,10);

  
  //creating Groups
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  score = 0;
}


function draw() {
background("white");
  
  fill("black")
  textSize(12)
  score = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+score,500,40)
  
  console.log(monkey.y);
  
  if(keyDown("space")&&monkey.y>=120){
    monkey.velocityY = -10;
  }
  
 monkey.velocityY = monkey.velocityY+0.5;
  
  
  //giving an infinite scrolling effect
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  
  
  edges = createEdgeSprites();
  
  
  
  
  //stop falling monkey 
monkey.collide(ground);
  
  
  bananaf();
  obstaclef();
  
  

  
  drawSprites();
}

function bananaf(){
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,150,40,10);
    banana.y = Math.round(random(10,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 250;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    bananaGroup.add(banana);
}
}

function obstaclef(){
  
  if (frameCount % 300 === 0) {
    var stone = createSprite(600,180,10,40);
    stone.addImage(obstacleImage);
    stone.scale = 0.1;
    stone.velocityX = -3;
    
     //assign lifetime to the variable
    stone.lifetime = 200;
    
    //adjust the depth
    stone.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    
    obstacleGroup.add(stone);
}
}
