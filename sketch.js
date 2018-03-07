//2016_12_12

var bg;
var y = 0;

function setup() {
 bg= loadImage("images/luznaranja.jpg");
 createCanvas(windowWidth, windowHeight);
 
//crear un lienzo
//CreateCanvas(hor,ver)
//createCanvas(windowWidth, windowHeight);

//pintar el fondo naranjo
//background(color);
//background(255,145,28);


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
text("Andrés Bartelsman Vega",50,50);
text("Born on July 15th, 1989 in Santiago de Chile",50,65);
text("Santiago de Chile",50,80);
text("Nationality: Chilean / Dutch",50,95);
text("Contact: aabartel@uc.cl",50,110);
text("Studies",50,140);
text("2008-2016 Architecture Studies (professional degree) at Universidad Católica de Chile / Santiago, Chile",50,155);
text("1994-2007 Primary & Secondary Education at Deutsche Schule Santiago / Santiago, Chile",50,170);
text("Languages",50,200);
text("Spanish Native",50,215);
text("English Intermediate",50,230);
text("German Intermediate",50,245); 
strokeWeight (0)
fill(250,250,250);




//triangle(x1,y1,x2,y2,x3,y3)
//triangulo desde la la izquierda de la pantalla (extremo superior izquierdo y extremo inferior izquierdo) al cursor
//triangle(0,0,0,height,mouseX,mouseY);
}
