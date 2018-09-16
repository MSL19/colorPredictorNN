//I'm tired....video is at 16:02
//vid link: https://www.youtube.com/watch?v=KtPpoMThKUs&t=2005s
let r,g,b;
let brain;
let which = "black";

function pickColor(){
    r = random(255);
    g = random(255);
    b = random(255);
    redraw();
}
function setup(){
    createCanvas(600,300);
    noLoop();

    brain = new NeuralNetwork(3,3,2);
    pickColor();
}
function mousePressed(){
    let targets;
    if(mouseX > width/2){
        targets = [0,1];
    }
    else{
        targets = [1,0];
    }
    let inputs = [r/255,g/255,b/255];
    brain.train(inputs, targets);
    pickColor();
    
}

function colorPredictor(r,g,b){
   /* if((r+g+b)>300){
        return "black";
    }
    else{
        return "white";
    }
    //This is a human learning algorithm
    */
   let inputs = [r/255,g/255,b/255];
   let outputs = brain.predict(inputs);
   console.log(outputs);
   if(outputs[0]>outputs[1]){
       return "black";
   }
   else{
       return "white";
   }
}
function draw(){
    background(r,g,b);
    strokeWeight(4);
    stroke(0);
    line(width/2,0,width/2,height);
    textSize(64);
    noStroke();
    fill(0);
    textAlign(CENTER,CENTER);

    text("black", 150, 150);
    fill(255);
    text("white", 450,150 );
    let which = colorPredictor(r,g,b);
    if(which === "black"){
        fill(0);
        ellipse(150,250,60);
    }
    else{
        fill(255);
        ellipse(450,250,60);
    }
}