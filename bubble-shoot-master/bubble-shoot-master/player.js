var p; 
var size;
var heading;
var pVel;
var force;
var boostColor;
var touch;
var playerColor;
var Score;
var Health;

function updatePlayer() {
    boostColor = color(0)
        //move and rotate player 

    if (keyIsDown(LEFT_ARROW)||keyIsDown(65)) {
        heading -= 6;
    }
    if (keyIsDown(RIGHT_ARROW)||keyIsDown(68)) {
        heading += 6;
    }
    if (keyIsDown(UP_ARROW)||keyIsDown(87)) {
        force = p5.Vector.fromAngle(radians(heading));
        pVel.add(force.mult(0.2));
        boostColor = color(0, 255, 0);
    }

    //contain player
    if (p.x > 1270) {
        p.x = 0;
    }
    if (p.x < 0) {
        p.x = 1270;
    }
    if (p.y > 570) {
        p.y = 0;
    }
    if (p.y < 0) {
        p.y = 570;
    }

    if(Health === 0){
       p.pop();
       laserSound.play();
    }

    //update player location
    pVel.mult(0.978);
    p.add(pVel);
    //draw the player
    push();
    translate(p.x, p.y);
    rotate(radians(heading));
    //flame stuff

    fill(boostColor)
    triangle(-size + 2, size * .7, -size * 3.5, size / 7, size * -.7, -size * .7);
    //health


    fill(playerColor);
    triangle(-size + 1, -size + 1, size + 10, 0, -size + 1, size + 1);
    pop();
    fill(255);
    text(Health,1245,25);
    text("Health:",1200,25);

    fill(255);
    text(Score, 50, 25);
    text("Score:",10,25);

}