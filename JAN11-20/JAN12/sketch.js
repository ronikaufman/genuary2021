// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.12
// "Use an API (e.g. the weather)."
// https://genuary2021.github.io/

const api_key = "a0f1ee099168b706c3b08aecffef6ce4";
const city = "Stockholm";
let data;

function preload() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  data = loadJSON(url);
}

function setup() {
  createCanvas(512, 512);
  angleMode(DEGREES);
  background(0, 0, 255);
  textFont("Monospace", 24);
  textStyle(BOLD);
  textAlign(RIGHT, BOTTOM);
  noLoop();
}

function draw() {
  let n = data.main.pressure*100;
  let t = data.main.temp;
  let t_min = data.main.temp_min;
  let t_max = data.main.temp_max;
  let h = data.main.humidity;
  let sp = data.wind.speed;
  let deg = data.wind.deg;
  noiseSeed(data.id);
  randomSeed(data.sys.country);
  
  noStroke();
  fill(255, 255, 0);
  for (let i = 0; i < n; i++) {
    let x = random(width);
    let y = random(height);
    let r = noise(x/t, y/t, sp)+1;
    let d = floor(noise(x/t_min, y/t_max, deg)*h);
    if (d%2 == 0) {
      circle(x, y, r);
    }
  }
  
  stroke(0, 0, 255);
  strokeWeight(3);
  text(data.name, width-5, height);
}