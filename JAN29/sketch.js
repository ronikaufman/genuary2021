// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.29
// "Any shape, none can touch."
// https://genuary2021.github.io/

let polygons = [];
let maxRadius = 64;
let minRadius = 4;
const eps = 1e-2;

function setup() {
  createCanvas(512, 512);
  noLoop();
  noStroke();
}

function draw() {
  background(255, 255, 0);
  blendMode(DIFFERENCE);

  for (let i = 0; i < 6000; i++) {
    let poly = generatePolygon();
    if (canPlace(poly)) {
      polygons.push(poly);
      drawPolygon(poly);
    }
    maxRadius -= 0.01;
  }
}

// create and return 1 polygon
function generatePolygon() {
  let xCenter = random(width);
  let yCenter = random(height);
  let radius = random(minRadius, maxRadius);
  let angle = random(TWO_PI);
  let n = floor(random(3, 9));
  let step = TWO_PI/n;
  
  let poly = [];
  for (let theta = 0; theta < TWO_PI; theta += step) {
    poly.push([xCenter + radius * cos(theta + angle),
               yCenter + radius * sin(theta + angle)]);
  }
  return poly;
}

// draw the polygon
function drawPolygon(poly) {
  beginShape();
  for (let v of poly) {
    vertex(v[0], v[1]);
  }
  endShape(CLOSE);
}

// check whether we can place the polygon
function canPlace(poly) {
  if (polygonIsOut(poly)) {
    return false;
  }
  for (let poly2 of polygons) {
    if (polygonsIntersect(poly, poly2)) {
      return false;
    }
  }
  return true;
}

// check whether poly has vertices outside of the canvas
function polygonIsOut(poly) {
  for (let v of poly) {
    if ((v[0] < 0) || (v[0] > width) || (v[1] < 0) || (v[1] > height)) {
      return true;
    }
  }
  return false;
}

// check whether poly1 and poly2 intersect
function polygonsIntersect(poly1, poly2) {
  let n1 = poly1.length;
  let n2 = poly2.length;
  for (let i = 0; i < n1; i++) {
    let [xA, yA] = poly1[i];
    let [xB, yB] = poly1[(i+1)%n1];
    for (let j = 0; j < n2; j++) {
      let [xC, yC] = poly2[j];
      let [xD, yD] = poly2[(j+1)%n2];
      if (segmentsIntersect(xA, yA, xB, yB, xC, yC, xD, yD)) {
        return true;
      }
    }
  }
  return false;
}

// check whether [AB] and [CD] intersect
function segmentsIntersect(xA, yA, xB, yB, xC, yC, xD, yD) {
  if (abs(xB-xA) <= eps) {
    // (AB) is vertical
    let [m2, p2] = lineParams(xC, yC, xD, yD);
    let y = m2*xA + p2;
    return ((yA < y) && (y < yB)) || ((yB < y) && (y < yA));
  } else if (abs(xD-xC) <= eps) {
    // (CD) is vertical
    let [m1, p1] = lineParams(xA, yA, xB, yB);
    let y = m1*xC + p1;
    return ((yC < y) && (y < yD)) || ((yD < y) && (y < yC));
  } else if (abs(yB-yA) <= eps) {
    // (AB) is horizontal
    if (abs(yD-yC) <= eps) {
      // (AB) and (CD) are parallel
      return (yA == yC);
    }
    let [m2, p2] = lineParams(xC, yC, xD, yD);
    let x = (yA-p2)/m2;
    return ((xA < x) && (x < xB)) || ((xB < x) && (x < xA));
  } else if (abs(yD-yC) <= eps) {
    // (CD) is horizontal
    let [m1, p1] = lineParams(xA, yA, xB, yB);
    let x = (yC-p1)/m1;
    return ((xC < x) && (x < xD)) || ((xD < x) && (x < xC));
  }
  
  let [m1, p1] = lineParams(xA, yA, xB, yB);
  let [m2, p2] = lineParams(xC, yC, xD, yD);
  // intersection between the lines (AB) and (CD)
  let x = (p2-p1) / (m1-m2);
  let y = m1*x + p1;
  
  // check if the point is on the segment [AB]
  let xinAB = ((xA < x) && (x < xB)) || ((xB < x) && (x < xA));
  let yinAB = ((yA < y) && (y < yB)) || ((yB < y) && (y < yA));
  // check if the point is on the segment [CD]
  let xinCD = ((xC < x) && (x < xD)) || ((xD < x) && (x < xC));
  let yinCD = ((yC < y) && (y < yD)) || ((yD < y) && (y < yC));
  return (xinAB && yinAB && xinCD && yinCD);
}

// compute parameters of the line going thought A and B
// y = mx + p
function lineParams(xA, yA, xB, yB) {
  let m = (yB-yA) / (xB-xA);
  let p = yB - m*xB;
  return [m, p]
}