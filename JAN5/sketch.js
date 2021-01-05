// By Roni Kaufman
// https://ronikaufman.github.io/

// Genuary JAN.5
// "Do some code golf! How little code can you write to make something interesting? Share the sketch and its code together if you can."
// https://genuary2021.github.io/

m=(s,x,y,p)=>{rect(x,y,s);if(random()<p)for(let i=0;i<4;)m(s/2,x+i%2*s/2,y+floor(i++/2)*s/2,p/2)};setup=_=>{createCanvas(w=512,w);stroke(0,0,w);fill(w,w,0);m(w,0,0,3)}

/* shorter version without color:
m=(s,x,y,p)=>{rect(x,y,s);if(random()<p)for(let i=0;i<4;)m(s/2,x+i%2*s/2,y+floor(i++/2)*s/2,p/2)};setup=_=>createCanvas(w=512,w)&&m(w,0,0,3)
*/