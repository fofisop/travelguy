1
let eyeWid =50;
let eyeHig = 40;
let pupilWid = 22;
let pupilHig =25;






function setup() {

    createCanvas(800, 600);

   background('#87CEFA'); 
}

function draw() {
  strokeWeight(1);
    background(220);
    angleMode(DEGREES);
    rectMode(CENTER);
    fill(0, 255, 255);

   ellipse(400,300,175,200);
  
  




    //eyesinthese
   
if (mouseIsPressed) {
  fill(0);
  ellipse(370, 280, eyeWid, eyeHig / 8);
  ellipse(430, 280, eyeWid, eyeHig / 8);
} else {
  fill('#B2EBF2');
  ellipse(370, 280, eyeWid, eyeHig);
  ellipse(430, 280, eyeWid, eyeHig);

  fill('#000000');
  ellipse(370, 280, pupilWid, pupilHig);
  ellipse(430, 280, pupilWid, pupilHig);
}
  

  //restofcode
  fill('#FF7F50'); 
 if (mouseIsPressed) {
  fill('#FF7F50'); 
  arc(400, 330, 50, 50, 0, 180);
} else {
  fill(0, 255, 255); 
  arc(400, 330, 50, 50, 0, 180);
}


  strokeWeight(5);
  line(312, 320, 240, 360);  
  line(488, 320, 560, 360); 
  line(370, 395, 370, 480); 


  line(430, 395, 430, 480); 
 
   text("Click to blink!", width - 10, height - 10);

}