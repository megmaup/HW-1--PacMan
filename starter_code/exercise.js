/*
Problem Set 1 PacMan  - Bounce off Walls 
1)	Bounce off Walls -  Given the code below and the 4 images  
PacMan1.png etc make the PacMan bounce off the boundary at x=600px 
so that it reverses its direction of motion and uses the last 2 images.
Then make it bounce off the boundary at x = 0px.  
You will need to take into account the size of the image.

*/

window.onload = function () {
    console.log("calling timer");
    timer();
};

var exercise = {};
exercise.flag = 0; // 0 = mouth open  1 = mouth shut
exercise.increment = 20; // pixels to move either + or -

exercise.run = function() {
    exercise.img1 = document.getElementById('PacMan');
    exercise.updatePosition();
    exercise.checkWallCollision();
    exercise.chooseImage();
};

function timer(){   
    updatePosition();
    chooseImage();
    counter++;
    if (counter < 10){
        setTimeout(timer,1000);
        console.log("timer went off");
    }
}
exercise.updatePosition = function() {
    // increment exercise.pos.x by increment 
    // now set image position using img1.style.left 
    // remember images positions are "xxx.px"
    exercise.pos.x += exercise.increment;
    exercise.img1.style.left = exercise.pos.x + 'px';
    console.log("update function call");

};
exercise.chooseImage = function() {
    // choose between all 4 images
   if (exercise.increment > 0) {
        if (exercise.flag == 1) {
            console.log ("setting image to one");
            exercise.img1.src = "PacMan1.png";
            exercise.flag = 0;
        } else {
            console.log ("setting image to two");
            exercise.img1.src = "Pacman2.png";
            exercise.flag = 1;
        }
    } else if (exercise.increment < 0) {
        if (exercise.flag == 1) {
            console.log ("setting image to three");
            exercise.img1.src = "PacMan3.png";
            exercise.flag = 0;
        } else {
            exercise.img1.src = "Pacman4.png";
            console.log ("setting image to four");
            exercise.flag = 1;
        }
    }
};
    exercise.checkWallCollision = function() {
    // reset the direction of motion if wall is hit
    // you need to take into account image width

if ((exercise.pos.x <0) || (exercise.pos.x>800)){
    exercise.increment *= -1
}
}


