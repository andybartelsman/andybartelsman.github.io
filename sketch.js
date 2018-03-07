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
text("Studies
2008-2016 Architecture Studies (professional degree) at Universidad Católica de Chile / Santiago, Chile
1994-2007 Primary & Secondary Education at Deutsche Schule Santiago / Santiago, Chile

Languages
Spanish Native
English Intermediate
German Basic

Laboral Experience
2016-2018 Junior Architect at OMN Arquitectos / Santiago, Chile
Designer and Project Developer [ Educational / Institutional] 
2015 Internship at P&G Arquitectos / Santiago, Chile
Development of the design of “Casa Lago Colico” [ Housing] 
2012 Internship “The Conservation and Land Trust Foundation” / Chaitén, Chile
Development “El Amarillo” Project for The Conservation and Land Trust Foundation in Parque Pumalín [Institutional] 

Academic Experience
2016 Study Thesis “Architecture as a support for the agricultural innovation” Universidad Católica de Chile / Santiago, Chile
Development of a research and the design for an Agricultural and Innovation School. Professors L.E. Bresciani & J. Di Girolamo
2015 Teacher Assistant at  “City & Landscape” course at Universidad Católica de Chile / Santiago, Chile
Proffesors J. Rosas, N. Tugas & T. Lin 

Experiencia en Organizaciones
2013 Pontificia Universidad Católica Students Union (FEUC) / Santiago, Chile
Chief Communications Department. Board Member.
2011 Pontificia Universidad Católica Architecture Students Union (CEARQ) / Santiago, Chile
Coordinator. Board Member.
2006-2007 Emergency Constructions / Nogales, Rosario & Villa Alegre, Chile
Team Leader.

Artistic parallel work
2017 Luz Vertical / San Felipe, Chile
Light Installation together with Cristina Gil & Carlos Sfeir
2017 Luz Naranja / Santiago y Caleu, Chile
Light experiments & photographic records together with Cristina Gil
2015 EM1+EM2 / Santiago, Chile
Wood Sculptures developed under the supervision of proffessor Osvaldo Peña.
2014-2017 Animalandscape  / Santiago, Chile
Series of digital collages.
2010 “Black Books 2”  / Santiago, Chile
Concrete re-interpretation of Rachel Whiteread´s Black Books´s Sculpture);



//triangle(x1,y1,x2,y2,x3,y3)
//triangulo desde la la izquierda de la pantalla (extremo superior izquierdo y extremo inferior izquierdo) al cursor
//triangle(0,0,0,height,mouseX,mouseY);
}
