//I'm tired....video is at 16:02
//vid link: https://www.youtube.com/watch?v=KtPpoMThKUs&t=2005s
let r,g,b;
let ro,go,bo;
let r0,g0,b0;

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

    brain = new NeuralNetwork(3,6,3);
    pickColor();
}
function mousePressed(){
    let targets;
    if(mouseX > width/2){
        targets = [0,0,0];
    }
    else{
        targets = [1,1,1];
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
   ro = outputs[0]*255;
   go = outputs[1]*255;
   bo = outputs[2]*255;
   r0 = outputs[2]*255;
   g0 = outputs[1]*255;
   b0 = outputs[0]*255;
   /*if(outputs[0]>outputs[1]){
       return "black";
   }
   else{
       return "white";
   }*/

}
function draw(){
    background(r,g,b);
    strokeWeight(4);
    stroke(0);
    line(width/2,0,width/2,height);
    textSize(64);
    noStroke();
    fill(color(ro,go,bo));
    textAlign(CENTER,CENTER);

    text("black", 150, 150);
    fill(color(r0,g0,b0));
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