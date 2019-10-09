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
var rgbselector;
var c1;
var c2;
var c3;
var life
var resources
var temperature
var temphurt

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
  c1 = random(50, 200);
  c2 = random(50, 200);
  c3 = random(50, 200);
  // c1 = green, c2 = blue, c3 = red
  if (temperature < 50) {
    temphurt = 40
  }
  if (temperature > 100) {
    temphurt = 40
  }
  temperature = c3 - (c2/2)
  life = c1 - temphurt
  resources = ((c3/1.5) + c1) - c2
//   rgbselector = random(0, 3);
//   if (rgbselector == 0) {
//     g = random(75, 255);
//     r = random(75, 255);
//     b = 255;
//   }
//   else if (rgbselector == 1) {
//     r = random(75, 255);
//     g = 255;
//     b = random(75, 255);
//   }
//   else {
//     r = 255;
//     g = 100;
//     b = 100;
//   }
}

//Draw.

function draw() {
  background(0);
  angleMode(DEGREES);
  text("temperature = " + temperature, 10, 10);
  text("resources = " + resources, 10, 20);
  text("life = " + life, 10, 30);
  let c = color(255,255,0);
  fill(c);
  circle(400, 400, 50);
  noFill();
  stroke(255);
  circle(400, 400, radius*2);
  xcurrent = 400 + Math.sin(angle) * radius;
  ycurrent = 400 + Math.cos(angle) * radius;
  angle = angle + speed;
  loadPixels();
  offset = offset + 0.75;
    for(var y = Math.floor(ycurrent - circlesize); y < ycurrent + circlesize; y++) {
      for(var x = Math.floor(xcurrent - circlesize); x < xcurrent + circlesize; x++) {
        if(dist(xcurrent, ycurrent, x, y) < circlesize) {
          var index = (x + y * width)*4;
          pixels[index+0] = noise((x - xcurrent + offset + (speed * 3))/14 + 50, (y - ycurrent)/14 + 100) * 255;
          pixels[index+1] = c1;
          pixels[index+2] = c2;
          pixels[index+3] = c3;
        }
      }
    }
  updatePixels();
}
