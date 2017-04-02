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
text("Architect",50,65);
text("Currently making Architecture",50,80);
text("Explorating Arts, Light and Landscape",50,95);
text("Santiago, Chile",50,110);
text("aabartel@uc.cl",50,125);
strokeWeight (0)
fill(250,250,250);



//triangle(x1,y1,x2,y2,x3,y3)
//triangulo desde la la izquierda de la pantalla (extremo superior izquierdo y extremo inferior izquierdo) al cursor
triangle(0, 0, 0, height, mouseX, mouseY);

  
}
