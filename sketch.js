function setup() {
  createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
  createA("https://github.com/soophiii", "server", "_blank").id("ola");
  textSize(20);
}

function draw() {
  colorMode(HSB, 360, 100, 100);
  background(random(0, 380), 100, 100);
}

function draw() {
  text("🥑", mouseX, mouseY);
}

function windowResized() {
  resizedCanvas(windowWidth, windowHeight);
}
