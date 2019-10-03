//Defines all the variables.

var circlesize;
var radius;
var speed = Math.random() * (0.030 - 0.005) + 0.005;
var xcurrent = 400
var ycurrent = 400
var angle = 0
var r
var g
var b
var x
var y
var offset = 0;

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

var img;
var pink;
//Setup.

function setup() {
  createCanvas(800, 800);
  radius = random(50, 300);
  circlesize = random(30, 70);
  pink = color(255, 102, 204);
  img = createImage(66, 66);

  print(ycurrent- circlesize)
}

//Draw.

function draw() {
  background(220);
  angleMode(DEGREES);
  // loadPixels();
  // offset = offset + 0.035
  // let minX = xcurrent - (circlesize / 2);
  // let minY = ycurrent - (circlesize / 2);
  // let maxX = xcurrent + (circlesize / 2);
  // let maxY = ycurrent + (circlesize / 2);
  // for(var y = minY; y < maxY; y++) {
  //   for(var x = minX; x < maxX; x++) {
  //       var i = (x + y * width) * 4;
  //       pixels[i + 0] = noise(x/20.0 + offset, y/20.0) * 255
  //       pixels[i + 1] = g;
  //       pixels[i + 2] = b;
  //       pixels[i + 3] = r;
  //   }
  // }
  // updatePixels();
  // var c
  // c = color(r, g, b);
  // fill(c)
  noFill();
  xcurrent = 400 + Math.sin(angle) * radius;
  ycurrent = 400 + Math.cos(angle) * radius;
  angle = angle + speed
  circle(xcurrent, ycurrent, circlesize);
  // rect(xcurrent - (circlesize / 2), ycurrent - (circlesize / 2), circlesize, circlesize);
  //
  // img.loadPixels();
  // for (let i = 0; i < 4 * (width * height / 2); i += 4) {
  // img.pixels[i] = noise(x/20.0 + offset, y/20.0) * 255
  // img.pixels[i + 1] = 255
  // img.pixels[i + 2] = 255
  // img.pixels[i + 3] = 255
  // }
  // img.updatePixels();
  // image(img, 17, 17);
  // offset += 0.2

  // loadPixels();
  //   offset = offset + 0.035
  //   for(var y = Math.floor(ycurrent - circlesize); y < ycurrent + circlesize; y++) {
  //       for(var x = Math.floor(xcurrent - circlesize); x < xcurrent + circlesize; x++) {
  //         if(dist(xcurrent, ycurrent, x, y) < circlesize) {
  //           var index = (x + y * width)*4;
  //           pixels[index+0] = 	noise(x/20.0 + offset, y/20.0) * 255
  //           pixels[index+1] = 255;
  //           pixels[index+2] = 255;
  //           pixels[index+3] = 255;
  //         }
  //       }
  //   }
  //   updatePixels();
  loadPixels();
    offset = offset + 0.035
    for(var y = Math.floor(ycurrent - circlesize); y < ycurrent + circlesize; y++) {
        for(var x = Math.floor(xcurrent - circlesize); x < xcurrent + circlesize; x++) {
          if(dist(xcurrent, ycurrent, x, y) < circlesize) {
            var index = (x + y * width)*4;
            pixels[index+0] = 	noise(x/20.0 + offset, y/20.0) * 255
            pixels[index+1] = 255;
            pixels[index+2] = 255;
            pixels[index+3] = 255;
          }
        }
    }
    updatePixels();
      // rect(xcurrent - circlesize, ycurrent - circlesize, circlesize*2, circlesize*2)
    image(img, xcurrent, ycurrent);
}
