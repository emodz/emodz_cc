var thex, they;
var v; // velocity
var t; // angle
var r; // rotation


var swidth = 50; 



function setup() {
  createCanvas(800, 600);
  
  initialize();
  
}

function draw() {

  fill(random(0,255), random(0,255), random(0,255));
  resetMatrix();
  translate(mouseX, mouseY);
  rotate(r);
  rect( -swidth/2, -swidth/2, swidth, swidth);

  
  
  // polar to cartesian transformation:
  thex = thex+v*cos(t);
  they = they+v*sin(t);
  
  r = r + v/100.;
  
  //v = v*0.99;
  
  if(thex>width) t = PI - t;
  if(thex<0) t = PI - t;
  if(they>height) t = TWO_PI - t;
  if(they<0) t = TWO_PI - t;
  
}

function mouseReleased()
{
  background(random(0,256), random(0,256), random(0,256));
  initialize();
}

function initialize()
{
  thex = random(0, width);
  they = random(0, height);
  v = random(5, 10); // random velocity
  t = random(0, TWO_PI); // random angle
  r = 0; // no rotation
}

