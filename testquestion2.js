let ball;
let ground;
function setup(){
    createCanvas(600, 400);
    background(0);
    world.gravity.y =10;
        ground = new Sprite(mouse.x, mouse.y, 400);
    ground.collider = 'static';
}

function draw(){
    clear();
    if(mouse.presses()){
        fill(random(255),random(255),random(255));
        ball = new Sprite(mouse.x,mouse.y,10);
        ball.collider = 'dynamic';
    }

}
