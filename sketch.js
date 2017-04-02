//2016_12_12

var bg;
var y = 0;

function setup() {
 bg= loadImage("images/orangelight.jpg");
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

//escribir texto
textFont ("Helvetica");
textSize(12);
text("Andrés Bartelsman Vega",50,50);
text("Architect",50,65);
text("Currently making Architecture",50,80);
text("And Experimental Experiments in other areas",50,95);
text("Santiago, Chile",50,110);
text("aabartel@uc.cl",50,125);
strokeWeight (0)
fill(250,250,250);

//s="Andres Bartelsman Vega is a chilean Architect who is learning how to develop a web page coding by himself.";
//fill (50);
//text (s,10,10,70,80); 

  
}
