//2018_12_06

var bg;
var y = 0;

function setup() {
 bg= loadImage("images/luznaranja.jpg");
 createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bg);
  stroke(226,204,0);
  line(0,y,width,y)
  
  y++;
  if (y > height) {
    y = 0;
  }

//escribir texto de encabezado
textFont ("Helvetica");
textSize(12);
text("Andrés Bartelsman / Architect",50,50);
text("Born on July 15th, 1989 in Santiago de Chile",50,65);
text("Living and working in Barcelona",50,80);
text("Nationality: Chilean / Dutch",50,95);
text("Contact: andresbartelsman@gmail.com",50,110);
text("Contact: andresbartelsman@gmail.com",50,110); 
strokeWeight (0)
fill(250,250,250);
}
