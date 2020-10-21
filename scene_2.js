
//Work in progress

let stem_one;
let stem_two;
let stem_three;

let x = 370;
let y = 220;

let x2 = 600;
let y2 = 50;

let x3 = 100;
let y3 = 500;

/*let angle = 0;
let size = 0;*/

function setup() {
  createCanvas(1200, 800);
  stem_one = createGraphics(700,500);
  stem_two = createGraphics(700,500);
  stem_three = createGraphics(700,500);
  //stem_one.background(100);
  //stem_two.background(100);
  //stem_three.background(100)
}

function draw() {
    background(0);


    //ellipse();

  //FOR STEM ONE
    stem_one.fill(random(255));
    stem_one.stroke(255);
    stem_one.ellipse(x, y, 10);
    x+=random(-10,10);
    y+=random(-10,10);
    //size+=random(1,2);

  //STEM TWO
    stem_two.fill(random(255));
    stem_two.stroke(255);
    stem_two.ellipse(x2, y2, 10);
    x2+=random(-5,0.5);
    y2+=random(-2,5)

  //STEM THREE
    stem_three.fill(random(255));
    stem_three.stroke(255);
    stem_three.ellipse(x3, y3, 10);
    x3+=random(-2,7);
    y3+=random(-10,4);

  imageMode(CENTER);
  push();
  translate(600,400);
  //rotate(angle);
  tint(0,255,0);
  image(stem_one,0,0);
  pop();


  push();
  translate(900,250);
  tint(255,0,0);
  image(stem_two,0,0);
  pop();


  push();
  translate(350,550);
  tint(0,0,255);
  image(stem_three,0,0);
  pop();

  /*
  push();
  translate(300,550);
  //tint(0,0,255);
  image(stem,0,0);
  pop();

  angle+=0.01;
    */
}
