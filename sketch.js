//2016_12_12

var bg;
var y = 0;

function setup() {
 bg= loadImage("images/ladertiag5.jpg");
 createCanvas(720,400);
 
//crear un lienzo
//CreateCanvas(hor,ver)
createCanvas(windowWidth, windowHeight);

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
textSize(14);
text("Andres Bartelsman Vega is a chilean Architect who is currently learning how to develop this web page coding by himself.",50,50);
strokeWeight (0)
fill(0);

//s="Andres Bartelsman Vega is a chilean Architect who is learning how to develop a web page coding by himself.";
//fill (50);
//text (s,10,10,70,80); 

  
}
