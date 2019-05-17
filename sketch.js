
function setup() {
  createCanvas(600, 600); 
 
}
function draw() {
  background(random(255),random(255),random(255));

  

  for (var i = 0; i < 60; i++) { 
    push();
    stroke(random(255),random(255),random(255));
    strokeWeight(frameCount/i*10); 
    translate(random(width), random(height));
    scale(0.3+random(i/5));
    cirkel();
    pop()
  }
}

function cirkel() {
  noFill() 
  ellipse(100,0,40,40)

}

