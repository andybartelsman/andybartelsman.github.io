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
text("Spanish: Native",50,215);
text("English: Intermediate",50,230);
text("German: Intermediate",50,245); 
text("Laboral Experience",50,275);
text("2016-2018 Junior Architect at OMN Arquitectos / Santiago, Chile",50,290);
text("Designer and Project Developer [ Educational / Institutional]",50,305);
text("2015 Internship at P&G Arquitectos / Santiago, Chile",50,320);
text("Development of the design of “Casa Lago Colico” [ Housing]",50,335);
text("2012 Internship “The Conservation and Land Trust Foundation” / Chaitén, Chile",50,350);
text("Development “El Amarillo” Project for The Conservation and Land Trust Foundation in Parque Pumalín [Institutional] ",50,365); 
text("Academic Experience",50,395);
text("2016 Study Thesis “Architecture as a support for the agricultural innovation” Universidad Católica de Chile / Santiago, Chile] ",50,410);
text("Development of a research and the design for an Agricultural and Innovation School. Professors L.E. Bresciani & J. Di Girolamo",50,425);
text("2015 Teacher Assistant at  “City & Landscape” course at Universidad Católica de Chile / Santiago, Chile",50,440);
text("Proffesors J. Rosas, N. Tugas & T. Lin ",50,455);
text("Participation in Organisations",50,485);
text("2013 Pontificia Universidad Católica Students Union (FEUC) / Santiago, Chile",50,500);
text("Chief Communications Department & Board Member",50,515);
text("2011 Pontificia Universidad Católica Architecture Students Union (CEARQ) / Santiago, Chile",50,530);
text("Coordinator & Board Member",50,545);
text("2006-2007 Emergency Constructions / Nogales, Rosario & Villa Alegre, Chile",50,560);
text("Team Leader",50,575);
text("Artistic work, 50,605");
text("2017 Luz Vertical / San Felipe, Chile", 50,620);
text("Light Installation together with Cristina Gil & Carlos Sfeir",50,635);



strokeWeight (0)
fill(250,250,250);




//triangle(x1,y1,x2,y2,x3,y3)
//triangulo desde la la izquierda de la pantalla (extremo superior izquierdo y extremo inferior izquierdo) al cursor
//triangle(0,0,0,height,mouseX,mouseY);
}
