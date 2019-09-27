//Defines all the variables

//var xc = Math.floor(Math.random() * 800);
//var yc = Math.floor(Math.random() * 800);
var sc = Math.floor(Math.random() * 100);
if (sc < 20) {
  var sc = Math.floor(Math.random() * 100);
}
if (sc < 20) {
  var sc = Math.floor(Math.random() * 100);
}
if (sc < 20) {
  var sc = Math.floor(Math.random() * 100);
}
if (sc < 20) {
  var sc = Math.floor(Math.random() * 100);
}
if (sc < 20) {
  var sc = Math.floor(Math.random() * 100);
}
var radius = Math.floor(Math.random()* 300);
if (radius < 50) {
  var radius = Math.floor(Math.random()* 300);
}
if (radius < 50) {
  var radius = Math.floor(Math.random()* 300);
}
if (radius < 50) {
  var radius = Math.floor(Math.random()* 300);
}
if (radius < 50) {
  var radius = Math.floor(Math.random()* 300);
}
if (radius < 50) {
  var radius = Math.floor(Math.random()* 300);
}

var xcurrent = 400
var ycurrent = 400
var r
var g
var b

//Wierd stuff that generates bright colors instead of darker ones.

var rgbselector = Math.floor(Math.random() * 3);
if (rgbselector == 0) {
  g = Math.floor(Math.random() * 255);
  r = g
  b = 255
}
else if (rgbselector == 1) {
  r = Math.floor(Math.random() * 255);
  g = 255
  b = r
}
else {
  r = 255
  g = Math.floor(Math.random() * 255);
  b = g
}

var angle = 0;
//Setup

function setup() {
  createCanvas(800, 800);

}

//Draw

function draw() {
  background(220);
  angleMode(DEGREES);
  xcurrent = 400 + Math.sin(angle) * radius;
  ycurrent = 400 + Math.cos(angle) * radius;
  angle = angle + 0.015
  var c
  c = color(r, g, b);
  fill(c);
  //noStroke();
  circle(xcurrent, ycurrent, sc);
}
