// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.25
// "Make a grid of permutations of something."
// https://genuary2021.github.io/

function setup() {
  createCanvas(512, 512);
  noLoop();
  stroke(0, 0, 255);
  noFill();
}

function draw() {
  background(255, 255, 0);
  
  let s = width/4;
  for (let i = 0; i < 16; i++) {
    push();
    translate((i%4)*s, floor(i/4)*s);
    
    strokeWeight(4);
    square(0, 0, s);
    translate(0, s/16);
    
    strokeWeight(2);
    
    if (i % 2 === 1) {
	  // 1___
	  //line(x, y, x + s, y + s);
      arc(s/4, s/4, s/4, s/4, 0, PI, CHORD);
	} else {
      circle(s/4, s/4, s/4);
    }
	
	if ((i/2) % 2 >= 1) {
	  // _1__
	  //line(x, y + s, x + s, y);
      arc(3*s/4, s/4, s/4, s/4, 0, PI, CHORD);
	} else {
      circle(3*s/4, s/4, s/4);
    }
	
	if ((i/4) % 2 >= 1) {
	  // __1_
	  //line(x, y + s/2, x + s, y + s/2);
      line(s/2, 3*s/8, s/2, 4*s/8);
      line(s/2, s/2, 9*s/16, s/2);
	} else {
      line(s/2, 3*s/8, s/2, 4*s/8);
      line(s/2, s/2, 7*s/16, s/2);
    }
	
	if ((i/8) % 2 >= 1) {
	  // ___1
	  //line(x + s/2, y, x + s/2, y + s);
      arc(s/2, 5*s/8, s/4, s/4, 0, PI);
	} else {
      arc(s/2, 6*s/8, s/4, s/4, PI, TWO_PI);
    }
    pop();
  }
}