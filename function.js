function keyControl(){
  if((rocket.y > 20)&&(rocket.y < height - 20)){

 
    if(keyIsDown(UP_ARROW)){
      rocket.slowDown = false;
      if(ySpeed > -10){
      if(ySpeed > 0){
        ySpeed -= 0.9
      }
      else{
        ySpeed -= 0.7;
      }
      console.log(ySpeed)
    }
    }else  if(keyIsDown(DOWN_ARROW)){
      rocket.slowDown = false;
      if(ySpeed < 10){
        if(ySpeed < 0){
            ySpeed += 0.9
        }
        else{
            ySpeed += 0.7;
        }
    }
    }
    // else  if(keyDown("RIGHT_ARROW")){
    //   rocket.slowDown = false;
    //   if(xSpeed < 5){
    //     if(xSpeed < 0){
    //       xSpeed ++;
    //     }
    //     else{
    //       xSpeed += 0.5;
    //     }
    //   }
    
    // }else if(keyDown("LEFT_ARROW")){
    //   rocket.slowDown = false;
    //   if(xSpeed < 5){
    //   if(xSpeed > 0){
    //     xSpeed --;
    //   }
    //   else{
    //     xSpeed -= 0.5;
    //   }
    // }
  
    // }
    else{
      ySpeed = ySpeed + ((-ySpeed)/12);
  
    }
  }
  else if(rocket.y < 20){
    ySpeed += 0.4
  }
  else{
    ySpeed -= 0.4

  }
  }


  
  
function fireStart(){
    
    push();
    //Adding smoke
    
      smoke.push(new Particle(rocket.x -rocket.w/2,rocket.y,32));
  
    
  
  for(var b = smoke.length - 1; b >= 0; b--){
    if(smoke[b].isComplete() === true){
      smoke.splice(b,1);
   
    }
  }
  for(var smokeObject of smoke){
    smokeObject.smokeDisplay();
    smokeObject.update();
  }
  
  
  
  
    blendMode(ADD)
  
    
   if(frameCount % 2 === 0){
      fire.push(new Particle(rocket.x - rocket.w/2 ,rocket.y ,28));
      
    }
    
    for(var b = fire.length - 1; b >= 0; b--){
      if(fire[b].isComplete() === true){
        fire.splice(b,1);
      
      }
    }
  
  
    for(var fireObject of fire){
      fireObject.display();
      fireObject.update();
  }
  
  
  
  pop()
  
  
  
  
  }

  function isTouching(a,b){
      
    if ((a.x - b.x < b.w / 2 + a.w / 2) &&
    (b.x - a.x < b.w / 2 + a.w / 2) &&
    (a.y - b.y < b.h / 2 + a.h / 2) &&
    (b.y - a.y < b.h / 2 + a.h / 2)) {
  
    return true;
  
  } else {
  
    return false;
  
  }
  
  }

  function enemyStart(){
    push();
    //Adding objects
    if(frameCount % 38 === 0){
        //Adding top
      enemies.push(new Enemy(width + 40, random(20,height - 20), 80, 80, -5.6, random(0.3,-0.3)));
      //Adding bottom

      //objects.push(new Enemy(width - 20, height - 40, 30, 80, -0.5));

    }
  
  for(var b = enemies.length - 1; b >= 0; b--){
    if(enemies[b].isComplete() === true){
        enemies.splice(b,1);
   
    }
    enemies[b].display();
    enemies[b].update();
    if(isTouching(rocket,enemies[b]) === true){
      score-=20;
        enemies.splice(b,1)
    }
  }
 
  pop();
  }


  function starStart(){
    push();
    //Adding objects
    if(frameCount % 5 === 0){
        //Adding top
      stars.push(new Star(width + 20, random(20,height - 20), 20, 20, -3.5, random(0.08,-0.08)));
      //Adding bottom

      //objects.push(new Enemy(width - 20, height - 40, 30, 80, -0.5));

    }
  
  for(var b = enemies.length - 1; b >= 0; b--){
    if(stars[b].isComplete() === true){
      stars.splice(b,1);
   
    }
  }
  for(var star of stars){
    star.display();
    star.update();
  }  
  pop();
  }

  function displayScore(){
    push();
    textFont("gigabyte");
    textSize(25);
    fill(0);
    text("Score: " + score, 70,40);
    text("Use arrow keys to control and don't hit the aliens!", 250,40);

    if(frameCount % 15 === 0){
      score++
    }

    pop();
  }