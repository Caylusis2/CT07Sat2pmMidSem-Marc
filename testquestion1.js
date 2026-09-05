function setup(){
    createCanvas(600, 400);
    background(0);
}

function draw(){
    if(mouse.presses()){
        fill(random(255),random(255),random(255));
        ball = new Sprite(mouse.x,mouse.y,10) 
        Sprite(300,200,10);
        ball.collider = 'dynamic';
    }
}


