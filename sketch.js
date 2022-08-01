var ghost
var door
var ghostImage
var Climber
var doorImage
var ClimberImage
var backgroundImage
var tower
var ClimbersGroup
var doorsGroup
var invisibleClimber
var invisibleClimberGrp
function preload(){
  ghostImage = loadImage (' ghost-standing.png')
  doorImage = loadImage ( 'door.png')
  ClimberImage = loadImage ( 'climber.png')
  backgroundImage = loadImage ( 'tower.png')
}

function setup(){
  createCanvas(600,600);
  tower = createSprite(300 , 300 )
  tower.addImage("tower" , backgroundImage)
  tower.velocityY = 2
  
  ghost = createSprite(300 , 550 , 40, 20)
  ghost.scale = 0.3
  ghost.addImage("ghost-standing",ghostImage)

  ClimbersGroup = createGroup()
  doorsGroup = createGroup()
  invisibleClimberGrp = createGroup()

  

  //spookySound.loop();
 
  
}

function draw(){
  background(0);
  if(tower.y >400   ){
    tower.y = 300

  }
    console.log(ghost.y)
    
  if(keyDown('space')){
    ghost.velocityY = -7

  }

  if(keyDown('right_arrow')){
    ghost.x += 2

  }

  if(keyDown('left_arrow')){
    ghost.x -= 2

  }

  if(ghost.isTouching(ClimbersGroup)){
    ghost.velocityY = 0
  }

  if(ghost.isTouching(invisibleClimberGrp)|| ghost.y >600){
    ClimbersGroup.destroyEach()
    doorsGroup.destroyEach()
    invisibleClimberGrp.destroyEach()
    textSize(50)
    fill("Blue")
    text("GAMEOVER" , 200 , 300)
    ghost.y = 300
    tower.destroy()
    ClimbersGroup.velocityEachY(0)
    doorsGroup.velocityEachY(0)
    invisibleClimberGrp.velocityEachY(0)


  }
  
  ghost.velocityY = ghost.velocityY+0.5

  spawnDoors()
   // ClimbersGroup.collide(ghost);
   
    drawSprites();

}



function spawnDoors() {
  if(frameCount % 60 === 0){
     door = createSprite(Math.round(random(200 , 600)) , -1 , 10 , 20)
     door.velocityY = 3
     door.addImage("door" , doorImage)
     Climber = createSprite (door.x ,50 , 10 , 20)
     Climber.velocityY = 3
     Climber.addImage("climber", ClimberImage)
     invisibleClimber= createSprite(door.x , 60 , 100 , 20)
     invisibleClimber.velocityY=3
    door.depth = ghost.depth
    ghost.depth = ghost.depth+1
    ClimbersGroup.add(Climber)
    doorsGroup.add(door)
    invisibleClimberGrp.add(invisibleClimber)
    invisibleClimberGrp.setLifetimeEach(180)
    ClimbersGroup.setLifetimeEach(180)
    doorsGroup.setLifetimeEach(180)
    invisibleClimber.visible = false

  }
    

  
      //assign lifetime to the variable
    
    
    //add each door to the group
    
}

