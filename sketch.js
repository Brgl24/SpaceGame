//Defines all the variables.

var circlesize;
var radius;
var speed;
var xcurrent;
var ycurrent;
var angle;
var r;
var g;
var b;
var x;
var y;
var offset;
var rotationbalancer;
var rgbselector

//Setup.

function setup() {
  createCanvas(800, 800);
  radius = random(175, 300);
  circlesize = random(30, 70);
  speed = random(0.005, 0.020);
  xcurrent = 400;
  ycurrent = 400;
  offset = 0.1;
  angle = 0;
  rgbselector = random(0, 2);
  if (rgbselector == 0) {
    g = random(75, 255);
    r = random(75, 255);
    b = 255;
  }
  else if (rgbselector == 1) {
    r = random(75, 255);
    g = 255;
    b = random(75, 255);
  }
  else {
    r = 255;
    g = random(75, 255);
    b = random(75, 255);
  }
}

//Draw.

function draw() {
  background(0);
  angleMode(DEGREES);
  let c = color(255,255,0);
  fill(c);
  circle(400, 400, 50);
  xcurrent = 400 + Math.sin(angle) * radius;
  ycurrent = 400 + Math.cos(angle) * radius;
  angle = angle + speed;
  loadPixels();
  offset = offset + 0.75;
    for(var y = Math.floor(ycurrent - circlesize); y < ycurrent + circlesize; y++) {
      for(var x = Math.floor(xcurrent - circlesize); x < xcurrent + circlesize; x++) {
        if(dist(xcurrent, ycurrent, x, y) < circlesize) {
          var index = (x + y * width)*4;
          pixels[index+0] = noise((x - xcurrent + offset + (speed * 3))/14, (y - ycurrent)/14 + 100) * 255;
          pixels[index+1] = r;
          pixels[index+2] = g;
          pixels[index+3] = b;
        }
      }
    }
  updatePixels();
}
