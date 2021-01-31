// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.28
// "Use sound."
// https://genuary2021.github.io/

let songs = []; 
let songNames;
let peaks; 
let n = 32;
     
function preload() { 
  soundFormats("mp3");
  let songNames = ["Don't Go Near The Water",
                   "Long Promised Road",
                   "Take A Load Off Your Feet",
                   "Disney Girls",
                   "Student Demonstration Time",
                   "Feel Flows",
                   "Lookin' At Tomorrow",
                   "A Day In The Life Of A Tree",
                   "'Til I Die",
                   "Surf's Up"];
  for (let song of songNames) {
    songs.push(loadSound(song));
  }
}  
     
function setup() {  
  createCanvas(512, 512);
  noLoop();
  textFont("monospace", 24);
  textStyle(BOLD);
  textAlign(CENTER, TOP);
  
  noFill();
  stroke(0, 0, 255);
  
  songNames = ["Don't Go Near\nThe Water",
               "Long Promised Road",
               "Take A Load\nOff Your Feet",
               "Disney Girls",
               "Student\nDemonstration\nTime",
               "Feel Flows",
               "Lookin' At Tomorrow",
               "A Day In The\nLife Of A Tree",
               "'Til I Die",
               "Surf's Up"];
}

function draw() {
  background(255, 255, 0);
  fill(0, 0, 255);
  noStroke();
  text("The Beach Boys - Surf's Up (1971)", width/2, 16);
  stroke(0, 0, 255);
  strokeWeight(2);
  line(0, 54, width, 54);
  
  textSize(12);
  noStroke();
  for (let i = 0; i < songs.length; i++) {
    let song = songs[i];
    peaks = song.getPeaks(n);
    
    push();
    let yoff = 148;
    if (i == 1 || i == 3 || i == 6 || i == 8) {
      yoff += 64;
    }
    translate(59+(i%5)*width/5.2, yoff+floor(i/5)*height/2.5);
    fill(0, 0, 255);
    blendMode(BLEND);
    text(songNames[i], 0, 60);
    
    fill(255);
    blendMode(DIFFERENCE);
    let step = song.file.split(" ").length;
    for (let v = 16; v > 0; v -= step) {
      blob(v*2.8, v);
    }
    pop();
  }
}

function blob(size, noisiness) {
  beginShape();
  let angleStep = TWO_PI / n;
  for (let i = 0; i < n+3; i++) {
    let theta = i*angleStep;
    let r = size + peaks[i%n] * noisiness;
    let x = r * cos(theta);
    let y = r * sin(theta);
    curveVertex(x, y);
  }
  endShape();
}