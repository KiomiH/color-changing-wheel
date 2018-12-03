var Cx, Cy;
var Diameter =300;
var Radius =Diameter/2;
var hSlider, sSlider, bSlider;

function setup() {
	createCanvas(1200, 670);
	Cx= 1200/2;
	Cy= 670/2;
	text(20);

	angleMode(DEGREES);
	
	noStroke();
	colorMode(HSB,360,100,100);
	hSlider = createSlider(0, 360, 200);
  hSlider.position(450, 100);
  hSlider.size(100,10);
  
  sSlider = createSlider(0, 100, 100);
  sSlider.position(450, 130);
  sSlider.size(100,10);
  
  bSlider = createSlider(0, 100, 70);
  bSlider.position(450, 160);
  bSlider.size(100,10);
	
}
function DrawHSB_ellipse(HueAng,Sat,Brightness,Rad) {
	colorMode(HSB,360,100,100);  
  var Xpos = Cx + Rad*cos(HueAng);   
	var Ypos = Cy + Rad*sin(HueAng);
	fill(HueAng,Sat,Brightness);    
	noStroke();
	ellipse(Xpos,Ypos, 20,20);         
}
function draw() {	 	
	colorMode(HSB,360,100,100);
	
	background(hSlider.value(),sSlider.value(),bSlider.value());
	
	var hNumber = hSlider.value();
	var sNumber = sSlider.value();
	var bNumber = bSlider.value();

	textSize(15);
	fill(255);
	text(["hue = "+hNumber],560,105);
  text(["sat = "+sNumber],560,135);
  text(["bright = "+bNumber],560,165);

	strokeWeight(3);
  stroke(90,10,30)
	fill((hSlider.value()+180)%360,sSlider.value(),bSlider.value());
	ellipse(Cx, Cy, Diameter, Diameter);
	
	ellipse(Cx,Cy,Radius,Radius);
	
	ellipse(Cx,Cy,Radius/2,Radius/2);

	
	DrawHSB_ellipse(60,25,100,Radius/4);
	DrawHSB_ellipse(120,25,100,Radius/4);
	DrawHSB_ellipse(180,25,100,Radius/4);
	DrawHSB_ellipse(240,25,100,Radius/4);
	DrawHSB_ellipse(300,25,100,Radius/4);
	DrawHSB_ellipse(360,25,100,Radius/4);
	
	DrawHSB_ellipse(15,50,100,Radius/2);
	DrawHSB_ellipse(45,50,100,Radius/2);
	DrawHSB_ellipse(75,50,100,Radius/2);
	DrawHSB_ellipse(105,50,100,Radius/2);
	DrawHSB_ellipse(135,50,100,Radius/2);
	DrawHSB_ellipse(165,50,100,Radius/2);
	DrawHSB_ellipse(195,50,100,Radius/2);
	DrawHSB_ellipse(225,50,100,Radius/2);
	DrawHSB_ellipse(255,50,100,Radius/2);
	DrawHSB_ellipse(285,50,100,Radius/2);
	DrawHSB_ellipse(315,50,100,Radius/2);
	DrawHSB_ellipse(345,50,100,Radius/2);
	
	DrawHSB_ellipse(0,100,100,Radius);
	DrawHSB_ellipse(15,100,100,Radius);
	DrawHSB_ellipse(30,100,100,Radius);
	DrawHSB_ellipse(45,100,100,Radius);
	DrawHSB_ellipse(60,100,100,Radius);
	DrawHSB_ellipse(75,100,100,Radius);
	DrawHSB_ellipse(90,100,100,Radius);
	DrawHSB_ellipse(105,100,100,Radius);
	DrawHSB_ellipse(120,100,100,Radius);
	DrawHSB_ellipse(135,100,100,Radius);
	DrawHSB_ellipse(150,100,100,Radius);
	DrawHSB_ellipse(165,100,100,Radius);
	DrawHSB_ellipse(180,100,100,Radius);
	DrawHSB_ellipse(195,100,100,Radius);
	DrawHSB_ellipse(210,100,100,Radius);
	DrawHSB_ellipse(225,100,100,Radius);
	DrawHSB_ellipse(240,100,100,Radius);
	DrawHSB_ellipse(255,100,100,Radius);
	DrawHSB_ellipse(270,100,100,Radius);
	DrawHSB_ellipse(285,100,100,Radius);
	DrawHSB_ellipse(300,100,100,Radius);
	DrawHSB_ellipse(315,100,100,Radius);
	DrawHSB_ellipse(330,100,100,Radius);
	DrawHSB_ellipse(345,100,100,Radius);
	
	DrawHSB_ellipse(frameCount%360,100,100,Radius);
	DrawHSB_ellipse(frameCount%360,50,100,Radius/2);
	DrawHSB_ellipse(frameCount%360,25,100,Radius/4);

}
