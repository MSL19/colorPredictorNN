let r,g,b;

function pickColor(){
    r = random(255);
    g = random(255);
    b = random(255);
}
function setup(){
    createCanvas(640,300);
    pickColor();
}
function mousePressed(){
    pickColor();
}
function draw(){
    background(r,g,b);

    textSize(64);
    noStroke();
    fill(0);
    text("black", 150, 150);
    text("white", 250,250);
}