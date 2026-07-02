let eyeWid =50;
let eyeHig = 40;
let pupilWid = 22;
let pupilHih =25;






function setup() {

    createCanvas(800, 600);

  background(255,249,226); 
}
function draw() {
    background(220);
    angleMode(DEGREES);
    rectMode(CENTER);
    ellipse(200,200,175,200);




    //eyesinthese
      ellipse(170, 170, eyeWid, eyeHig);

  ellipse(230, 170, eyeWid, eyeHig);
  ellipse(170, 170, pupilWid, pupilHig);
  ellipse( 230, 170, pupilWid, pupilHig);


  //restofcode
  arc (200, 230, 50, 50, 0, 180);

}
