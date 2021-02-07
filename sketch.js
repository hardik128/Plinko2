var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0;
var turn = 5;
var particle1;
var gameState = "start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,height,width,20);
  ground2 = new Ground(0,height/2,1,height);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    
    
    
    
}
 


function draw() {
  background("black");
  
  Engine.update(engine);
 
  textSize(20)
  text("Score : "+score,20,30);

  textSize(20)
  text("Turns left : "+turn,650,30);
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
     
  }

  if(particle1!=null){
    
    particle1.display();
  }
    if(particle1.body.position.y>760){
        if(particle1.body.position.x<320){
            score=score+500;
        }
    
        if(particle1.body.position.x>320 && particle1.body.position.x<540){
          score=score+200;
      }
     
      if(particle1.body.position.x>560 && particle1.body.position.x<560){
        score=score+100;
    }
  }
  ground1.display();
  ground2.display();

}
  
function mousePressed(){
  if((gameState !== "end") && (turn>0)){
    turn--;
    particle1 = new Particle(mouseX,10,20,20) 
  }      
}    
