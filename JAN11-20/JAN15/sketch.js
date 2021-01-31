// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.15
// "Let someone else decide the general rules of your piece."
// https://genuary2021.github.io/

const variables = ["X", "Y"];
const constants = ["F", "+", "−"];
const axioms = "FX";
const rules = ["X+YF+", "−FX−Y"];
const angle = 90;

function setup() {
  createCanvas(512, 512);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(255, 255, 0);
  stroke(0, 0, 255);
  strokeWeight(1.25);
  let s = 22;
  let n = 5;
  let text = rewrite(n, axioms);
  translate(width/2-s*3, height/2-s*7);
  for (let i = n; i < n+8; i++) {
    turtle(text, s);
    text = rewrite(1, text);
    s/=sqrt(2);
  }
  
  
}

// start: starting string
// n: number of rewrites
function rewrite(n, start) {
  let text = start;
  while (n-- > 0) {
    let i = 0;
    while (i < text.length) {
      let v = variables.indexOf(text[i]);
      if (v !== -1) {
        let r = rules[v];
        text = text.slice(0, i) + r + text.slice(i+1);
        i += r.length;
      } else {
        // it's a constant
        i++;
      }
    }
  }
  return text;
}

// text: instruction
// s: how much "move forward" is
function turtle(text, s) {
  //push();
  let plus = 0;
  let minus = 0;
  for (let i of text.split("")) {
    switch (i) {
      case "F":
        line(0, 0, s, 0);
        translate(s, 0);
        break;
      case "+":
        plus++
        rotate(-angle);
        break;
      case "−":
        minus++
        rotate(angle);
        break;
    }
  }
  rotate(plus*angle-minus*angle); // reset rotation
  //pop();
}