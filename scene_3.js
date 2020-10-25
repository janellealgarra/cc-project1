/*Thing I still have to troubleshoot:

JUST AN FYI, NOTHING IS CONNECT ATM. WILL FIX TOMORROW. JUST NEEDED THE CODE THE WORK AS I WANTED IT TO FIRST

//also, deleted scene 2 because it's discarded
// FINALLY FIXED THE CODE

PROBLEMS RESOLVED:
1. Frame rate changing after collision ---> fixed in line 151 by setting the frame rate back to 60FPS which is the standard FPS for p5

2. Planning the timing of the frames --> I couldn't use setTimeout/setInterval especially with the cells slowing down at collision.
Made boolean statements instead Lines 74-133 (also made it loop again after it is done, might try to fix that into an actually while
or for loop if possible but this is the best solution I could think of)

3.opacity of stars not working --> it was so tiny I didn't realize there was a stroke so I just turned that off ahha silly me

4. pattern_2 not showing properly --> HARDEST ONE!!! It worked the first time around but not the second time. Also in previous codes
it would only show the outer rim. Made another boolean under the variable "bg" and set it to true when I want the background reset and
false when I don't. But another problem was that the pattern only played the first time the loop ran. Realized I just needed to reset n
 counter in the equation.


- Final steps: adding the other code with keyboard press to switch between scenes + efficiency check?
- Extra: code slows down for some reason when I organize it into diff but connected files...

*/

// SCENE 1

//insert here
//keyboard press


//SCENE 2

//Colliding cells
let cell_1;
let cell_2;
let cell_3;
let cell_4;
let cell_5;
let cell_6;
let cell_7;
let cell_8;

//universe animation
let planets;
let stars = 1000;

//for phyllotaxis (pattern 2)
let n = 0;
let c = 4;

//for checking state (to play one by one)
let frame1 = true, frame2 = false, frame3 = false;
let start1 = false, start2 = false, start3 = false;


function setup() {
  createCanvas(1200, 800);
  //Branch(x, y, vx, vy)
  cell_1 = new Branch(0, 400,3,0);
  cell_2 = new Branch(width, 400,-3,0);
  cell_3 = new Branch(600, 0, 0,5);
  cell_4 = new Branch(600, 800,0,-5);
  cell_5 = new Branch(0, 0, 6, 4);
  cell_6 = new Branch(0, 800, 6,-4);
  cell_7 = new Branch(1200, 800,-6,-4);
  cell_8 = new Branch(1200, 0, -6, 4);

  planets = new Planets();

}
let bg = true; //trying to figure out phyllotaxis problem but it doesnt run a second time around the loop

function draw() {
  if(bg == true)
    background(0);//

  phase(); //Function call for comparison in

//--------FOR ONE BY ONE SCENE PLAY --------//
  if(frame1==true) {
    //FIRST FRAME
    cell_1.show();
    cell_2.show();
    cell_1.move();
    cell_2.move();

    //If frame 1 has started
    if(start1 == true && cell_1.x >= width && cell_2.x <= 0) {
      frame2 = true;
    }
  }

  if(frame2 == true) {
    //SECOND FRAME
    cell_3.show();
    cell_4.show();
    cell_3.move();
    cell_4.move();
    if(start2 == true && cell_3.y >= height + 60 && cell_4.y <= -60) {
      frame3 = true;
      //print("cell1:" + cell_3.y) --> checking to see location
    }
  }

  if(frame3==true) {
    //THIRD FRAME
    cell_5.show();
    cell_5.move();
    cell_6.show();
    cell_6.move();
    cell_7.show();
    cell_7.move();
    cell_8.show();
    cell_8.move();

    //check if circles are out of screen
    if(start3 == true && cell_5.y >= height + 60 && cell_5.x >= width + 60) {

      //re-initialize all relevant (to loop) variables (so everything play a second time)
      bg = true;
      n = 0;
      frame1 = true;
      frame2 = false;
      frame3 = false;
      start1 = false;
      start2 = false;
      start3 = false;
      cell_1.x = 0;
      cell_2.x = width;
      cell_3.y = 0;
      cell_4.y = 800;
      cell_5.x = 0;
      cell_6.x = 0;
      cell_7.x = 1200;
      cell_8.x = 1200;
      cell_5.y = 0;
      cell_6.y = 800;
      cell_7.y = 800;
      cell_8.y = 0;

    }
  }
}






// ---------------1ST COLLISION-------------------
function phase(){
  //background(0,0);// --> pattern_2 still not seen
  if (cell_1.collides(cell_2)){
    //red,g,b,sizeX,sizeY,f_rate
      planets.display(255,128,0,200,200,10);
      cell_1.vx = 1;
      cell_2.vx = -1;
      //if cells have collided
      start1 = true;
  } else {
    cell_1.vx = 3;
    cell_2.vx = -3;
    frameRate(60);
  }

// ---------------2ND COLLISION-------------------

  if (cell_3.collides(cell_4)){

    // PATTERNS
      if (cell_3.collides(cell_4) === 1){
        planets.display(255,0,0,250,250,10);
      }

      if (cell_3.collides(cell_4) === 2){
        planets.display(255,77,0,230,230,10);
      }

    if (cell_3.collides(cell_4) === 3){
        //third pattern
        planets.display(255,120,0,210,210,10);
      }

    cell_3.vy = 2;
    cell_4.vy = -2;
    start2 = true;
  } else {
    cell_3.vy = 5;
    cell_4.vy = -5;
  }

// ---------------FINAL COLLISION-------------------
  if (cell_5.collides(cell_7)){
        bg = false

    // PATTERNS
      if (cell_5.collides(cell_7) === 1){
        pattern_1();
      }

      if (cell_5.collides(cell_7) === 2){

        pattern_2();
        start3 = true;
      }

    if (cell_5.collides(cell_7) === 3){
        //third pattern
        planets.display(255,0,0,250,250,40);
      }
    bg = false;
    cell_5.vx = 0.3;
    cell_6.vx = 0.3;
    cell_7.vx = -0.3;
    cell_8.vx = -0.3;
    cell_5.vy = 0.3;
    cell_6.vy = -0.3;
    cell_7.vy = -0.3;
    cell_8.vy = 0.3;

  } else {
    bg =true;
    cell_5.vx = 6;
    cell_6.vx = 6;
    cell_7.vx = -6;
    cell_8.vx = -6;
    cell_5.vy = 4;
    cell_6.vy = -4;
    cell_7.vy = -4;
    cell_8.vy = 4;
  }

}

//------------OTHER FUNCTIONS AND CLASSES -------------------------

function pattern_1(){
  for (let i = 0; i < 500; i++) {
      noStroke();
      fill(random(255),random(255));
      //fill(random(255), random(255), random(255), random(255)); -- >rainbow
      ellipse(random(width), random(height), random(100));
      triangle(random(width), random(height), random(width), random(height), random(width), random(height));

    }
}

function pattern_2(){
  background(200,100,0,20);
  for (i=1; i<100; i++){
    let a = n * 137.5;
    let l = c * sqrt(n)*2;

    let g = l * cos(a) + width/2;
    let h = l * sin(a) + height/2;

      if (i === 20){
        fill(255,0,0);
      }

      if (i === 40){
        fill(255,137,0);
      }

      if(i === 80){
        fill(255,239,0);
      }

    noStroke();
    ellipse(g,h,10,10);

    n++;
  }
}


class Branch {
  constructor(x,y,vx,vy,r = 60){
    this.x = x;
    this.y = y;
    this.r = r;
    this.vx = vx; //velocity
    this.vy = vy;
  }

  move(){
    this.x += this.vx;
    this.y += this.vy;
  }

  show(){
    stroke(255);
    noFill();
    ellipse(this.x, this.y, this.r*2);
  }

  collides(other){
    let d = dist(this.x,this.y, other.x, other.y)
    if ((d < this.r + other.r)){
    let m = map(d,0,120,0,3);
    if(m>0){
    //  print(round(m));
      return round(m);
    }
    } else {
    //  return (d < this.r + other.r);
      return false;
    }
  }

}


class Planets{
  contructor(){
  //IDK IF I NEED THIS D:
  }

display(red,g,b,sizeX,sizeY,f_rate = 60){ //variables to change sun in the collision
  background(0);

  //STARS
    for(let i = 0; i<stars; i++){
      let randomX = random(width);
      let randomY = random(height);
      let randomO = random(50,130);
      fill(255);
      noStroke();
     ellipse(randomX,randomY,random(0.5,2),random(0.5,2));
  }
    frameRate(f_rate);

    noStroke();

  //SUN
    noStroke();
    fill(255,178,102,random(130,150));
    ellipse(600,400,260,260);
    fill(255,178,102,random(170,200));
    ellipse(600,400,240,240);
    fill(255,128,0,random(100,200));
    ellipse(600,400,220,220);
    //ACTUAL SUN
    fill(red,g,b);
    ellipse(600,400,sizeX,sizeY);
    //fill(255,128,0);
    //ellipse(600,400,200,200);

    //DEPTH
    fill(204,102,0,15);
    ellipse(600,400,200,160);
    ellipse(600,400,200,140);
    ellipse(600,400,200,120);
    ellipse(600,400,200,100);


    //Saturn
    fill(233,213,233,random(30,50));
    ellipse(240,550,300,50);
    ellipse(240,550,290,45);
    ellipse(240,550,270,40);
    fill(233,213,157);
    ellipse(random(236,242),550,140,140);
    fill(229,203,131,90);
    ellipse(random(235,245),550,130,120);
    fill(229,203,131,130);
    ellipse(random(235,245),550,130,90);
    fill(229,203,131);
    ellipse(random(235,245),550,130,60);

    //mars
    fill(255,77,0,random(80,100));
    ellipse(650,150,90,90);
    fill(255,77,0);
    ellipse(random(648,653),150,75,75);
    fill(204,0,0);
    ellipse(655,135,25,25);
    fill(204,0,0,140);
    ellipse(640,160,22,22);
    fill(204,0,0,100);
    ellipse(665,164,18,18);
    ellipse(630,135,10,10);

    //venus
    fill(255,204,229,random(50,70));
    ellipse(400,340,90,90);
    fill(255,220,229);
    ellipse(random(398,402),340,75,75);
    fill(255,204,229,100);
    ellipse(400,340,70,50);
    fill(255,204,229,150);
    ellipse(400,340,70,35);
    //ellipse(400,random(330,340),80,80);

    //mercury
    fill(128,128,128,random(60,100));
    ellipse(880,280,85,85);
    fill(191,155,119);
    ellipse(random(878,882),280,70,70);
    fill(155,126,96,130);
    ellipse(865,280,20,20);
    fill(155,126,96,80);
    ellipse(880,295,15,15);

    //earth
    fill(255,204,255,random(20,30));
    ellipse(700,650,120,120);
    fill(0,27,159,random(110,150));
    ellipse(700,650,110,110);
    fill(51,100,255);
    ellipse(random(698,702),650,100,100);
    fill(0,27,159,10);
    ellipse(700,650,100,80);
    ellipse(700,650,100,60);
    fill(0,110,0);
    ellipse(720,630,40,25);
    triangle(660, 630, 685, 650, 690, 620);
    triangle(680, 640, 710, 650, 690, 690);

    //jupiter
    fill(210,200,130, random(80,100));
    ellipse(1050,200,150,150);
    fill(205,199,160);
    ellipse(random(1048,1052),200,130,130);
    fill(210,183,74,70);
    ellipse(1050,200,130,100);
    ellipse(1050,200,130,70);
    ellipse(1050,200,130,40);

    //uranus
    fill(193,218,218,random(80,100));
    ellipse(950,500,105,105);
    fill(0,255,128,100);
    ellipse(950,500,95,95);
    fill(0,204,204);
    ellipse(random(948,952),500,85,85);
    fill(0,255,128,40);
    ellipse(950,500,85,70);
    ellipse(950,500,85,50);


    //neptune
    fill(0,145,255,random(100,150));
    ellipse(200,200,120,120);
    fill(0,145,255);
    ellipse(random(197,200),200,100,100);
    fill(0,160,255);
    ellipse(random(193,195),195,90,90);
    fill(0,180,255);
    ellipse(random(187,190),192,75,75);
 }

}
