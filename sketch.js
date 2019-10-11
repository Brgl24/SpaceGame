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
var colors

function drawinfo(temperature, resources, life) {
  text("temperature = " + Math.floor(temperature), 10, 10);
    strokeWeight(4);
    stroke(255, 0, 0);
    line(0, 16, temperature, 16);
    stroke(255, 255, 255);
    strokeWeight(1);
  text("resources = " + Math.floor(resources), 10, 30);
    strokeWeight(4);
    stroke(135, 206, 235);
    line(0, 36, resources, 36);
    stroke(255, 255, 255);
    strokeWeight(1);
  text("life = " + Math.floor(life), 10, 50);
    strokeWeight(4);
    stroke(0, 255, 0);
    line(0, 56, life, 56);
    stroke(255, 255, 255);
    strokeWeight(1);
}

//Setup.

function setup() {

//Basic variable generation

  createCanvas(windowWidth, windowHeight);
  radius = random(175, 300);
  circlesize = random(30, 70);
  speed = random(0.005, 0.020);
  xcurrent = windowWidth/2;
  ycurrent = windowHeight/2;
  offset = 0.1;
  angle = 0;
  temphurt = 0;

//Color and Info generation

  c1 = random(50, 200);
  c2 = random(50, 200);
  c3 = random(50, 200);
  // c1 = green, c2 = blue, c3 = red
  temperature = c3 - (c2/2)
  if (temperature < 50) {
    temphurt = 40
  }
  if (temperature > 100) {
    temphurt = 40
  }
  life = c1/2 - temphurt
  resources = ((c3/1.5) + c1) - c2

  if (temperature < 0) {
    life = 0
  }
  if (temperature > 100) {
    life = 0
  }
  if (resources < 0) {
    resources = (random(15,30))
  }
  if (life < 0) {
    life = 0
  }
}

//Draw.

function draw() {

//Setup

  background(0);
  angleMode(DEGREES);

//Drawing infopanel

  drawinfo(temperature, resources, life)

//Sun

  let c = color(255,255,0);
  fill(c);
  circle(windowWidth/2, windowHeight/2, 50);

//Orbit-Path

  noFill();
  stroke(255);
  strokeWeight(3);
  circle(windowWidth/2, windowHeight/2, radius*2);
  strokeWeight(1);

//Changes Between Frames

  xcurrent = windowWidth/2 + Math.sin(angle) * radius;
  ycurrent = windowHeight/2 + Math.cos(angle) * radius;
  angle = angle + speed;

//Perlin Noise Generation

  loadPixels();
  offset = offset + 0.75;
    for(var y = Math.floor(ycurrent - circlesize); y < ycurrent + circlesize; y++) {
      for(var x = Math.floor(xcurrent - circlesize); x < xcurrent + circlesize; x++) {
        if(dist(xcurrent, ycurrent, x, y) < circlesize) {
          var index = (x + y * width)*4;
          pixels[index+0] = noise((x - xcurrent + offset + (speed * 3))/14 + 50, (y - ycurrent)/14 + 100) * 350;
          pixels[index+1] = c1;
          pixels[index+2] = c2;
          pixels[index+3] = c3;
        }
      }
    }
  updatePixels();

//End

}
