//I'm tired....video is at 16:02
//vid link: https://www.youtube.com/watch?v=KtPpoMThKUs&t=2005s
let r,g,b;
let brain;
let which = "black";

function pickColor(){
    r = random(255);
    g = random(255);
    b = random(255);
}
function setup(){
    createCanvas(600,300);
    pickColor();
    brain = new NeuralNetwork(3,3,2);
}
function mousePressed(){
    pickColor();
}
function draw(){
    background(r,g,b);

    textSize(64);
    noStroke();
    fill(0);
    textAlign(CENTER,CENTER);

    text("black", 200, 150);
    fill(255);
    text("white", 400,150 );
    if(which === "black"){
        fill(0);
        ellipse(200,250,60);
    }
    else{
        fill(255);
        ellipse(400,250,60);
    }
}