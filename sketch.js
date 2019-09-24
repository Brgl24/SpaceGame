var x = Math.floor(Math.random() * 3);
var r
var g
var b
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
var xc = Math.floor(Math.random() * 800);
var yc = Math.floor(Math.random() * 800);
var sc = Math.floor(Math.random() * 200);

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  var c
  c = color(r, g, b);
  text(x, 400, 400);
  fill(c);
  noStroke();
  circle(xc, yc, sc);
}

//if (x == 0.0) {
//  c = color(255, 0, 0);
//}
//else if (x == 1.0) {
//  c = color(0, 255, 0);
//}
//else {
//  c = color(0, 0, 255);
//}
//var r = Math.floor(Math.random() * 255);
//var g = Math.floor(Math.random() * 255);
//var b = Math.floor(Math.random() * 255);
