var planetsize
var orbitdistance
var starsx = [];
var starsy = [];
var noiseoff = 0;
var angle = 0;
var speed = 0.01;
var centery;
var centerx;

function setup() {

  //Window-sized canvas
  createCanvas(windowWidth, windowHeight);

  //Makes the sliders for planetsize, orbitdistance, etc.
  slider1 = createSlider(1, 100, 100); slider1.position(10, 10); slider1.style('width', '80px');
  slider2 = createSlider(100, 250, 100); slider2.position(10, 60); slider2.style('width', '80px');
  slider3 = createSlider(0, 255, 0); slider3.position(10, 110); slider3.style('width', '80px');
  slider4 = createSlider(0, 255, 36); slider4.position(10, 160); slider4.style('width', '80px');
  slider5 = createSlider(0, 255, 42); slider5.position(10, 210); slider5.style('width', '80px');

  //Creates array for stars in BG
  for(i = 1; i < 100; i++) {
    starsx[i] = random(0, windowWidth)
    starsy[i] = random(0, windowHeight)
  }
}

function draw() {

  //Black BG
  background(0);

  //Used as origin to make screen more like a conventional coordinate system
  centery = windowHeight/2
  centerx = windowWidth/2 

  //Miniature Sun
  fill(255, 255, 0)
  circle(centerx, centery, 20)
  fill(255, 255, 255);

  //Draw the stars, random(2, 3) is for the twinkly effect
  for(i = 1; i < 100; i++) {
    let sx = starsx[i]
    let sy = starsy[i]
    circle(sx, sy, random(2, 3))
  }

  //Planet position
  xcurrent = centerx + Math.sin(angle) * orbitdistance;
  ycurrent = centery + Math.cos(angle) * orbitdistance;

  //Planet position changing
  angle += speed
  if(angle == 360) {
    angle = 0
  }

  //Slider and Text
  planetsize = slider1.value();
  orbitdistance = slider2.value();
  redtint = slider3.value();
  greentint = slider4.value();
  bluetint = slider5.value();
  fill(255, 255, 255)
  text("Planet Size: " +  planetsize, 10, 50)
  text("Orbit Distance: " +  orbitdistance, 10, 100)
  text("Red Tint: " + redtint, 10, 150)
  text("Green Tint: " + greentint, 10, 200)
  text("Blue Tint: " + bluetint, 10, 250)

  //Perlin Noise Generation
  for (var x = 0; x < width; x+=1) {
    for (var y = 0; y < height; y+=1) {
      if(((xcurrent - x)*(xcurrent - x)) + ((ycurrent - y)*(ycurrent - y)) < ((planetsize/2)*(planetsize/2))) {
        var c = 255 * noise(0.02 * x, 0.02 * y);
        var b = c + bluetint*0.5
        var g = 255 - b + bluetint + greentint/3
        var r = 0 + redtint - greentint/2 - bluetint
        fill(r, g, b);
        noStroke();
        rect(x, y, 2, 2);
      }
    }		
  }
}