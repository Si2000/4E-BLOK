
function setup() {
  createCanvas(600, 600); // ik heb (600,600) gedaan,Omdat (400,400)  beetje te klein is.
  //ik heb frequentie niet beperkt ,omdat ik meer verandering wil zien.
}
function draw() {
  background(random(255),random(255),random(255));// ik heb "random" geschreven Omdat ik meer kleuren wil zien. 

  

  for (var i = 0; i < 60; i++) { // ik wil meer "ellipse" of meer mogelijkheid zien, daarom doe ik 60 bij i
    push();
    stroke(random(255),random(255),random(255));// meer kleuren
    strokeWeight(frameCount/i*10); // strokeWeight van linkerkant is klein en strokeWeight van rechterkant is groot,waardoor je meer vergelijking kan zien.
    translate(random(width), random(height));// ik wil de figuur overal verspreid worden.
    scale(0.3+random(i/5));//ik wil de grootte bij de cirkel vershil maken.
    cirkel();// verbingden met function cirkel
    pop()
  }
}

function cirkel() {
  noFill() // ik wil geen kleur in de cirkel zien, omdat de cirkel zal andere cirkels blokkeren als de cirkel  kleur heeft.
  ellipse(100,0,40,40)// cirkel

}
// de bedoeling van deze kunst is om meer kleur en verandering te zien. je moet blijven te kijken.Het duurt ongeveer 1min.
// brunch
