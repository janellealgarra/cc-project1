//GROUP 1
let cell_1;
let cell_2;

//GROUP 2
let cell_3;
let cell_4;
//NEXT CELLS COLLIDING AT ONCE
let cell_5;
let cell_6;
let cell_7;
let cell_8;

/*let n = 0;
let c = 4;
let m =0;*/

function setup() {
  createCanvas(1200, 800);
  cell_1 = new Branch(0, 400,1,0);
  cell_2 = new Branch(width, 400,-1,0);
  cell_3 = new Branch(600, 0, 0,1);
  cell_4 = new Branch(600, 800,0,-1);
  cell_5 = new Branch(0, 0, 1.5, 1);
  cell_6 = new Branch(0, 800, 1.5,-1);
  cell_7 = new Branch(1200, 800,-1.5,-1);
  cell_8 = new Branch(1200, 0, -1.5, 1);


}

function draw() {
  background(0);

/*
  m = map(mouseX, 0, 1200, 0,255);
  background(m);
  ellipse(mouseX,200,64, 64);*/

  if (cell_1.collides(cell_2)){
    // background(200,0,100);

    // PATTERNS
      if (cell_1.collides(cell_2) === 1){
        background(110,10,0);
      }
      if (cell_1.collides(cell_2) === 2){
        background(110,100,0);
      }
    if (cell_1.collides(cell_2) === 3){
        background(110,100,110);
      }
    //can this go into a function?
   /* for (let i = 0; i < 500; i++) {
      fill(random(255), random(255), random(255), random(255));
      ellipse(random(width), random(height), random(100));
      triangle(random(width), random(height), random(width), random(height), random(width), random(height));

    //cell_2.moveBackward(0.5);
    }*/
    print('hello');
    cell_1.vx = 3;

  } else {
    cell_1.vx = 1;
  }

  if (cell_3.collides(cell_4)){
    //PATTERN TBD
  }

  /*---------------------*/
    /*
    - DIFFERENT PATTERNS PLAYING PER POSITION OFTHE CELLS

    -When the first two circles are done, I want other circles to appear to make collisions that provide different graphics

    - change shape of circle upon collision. cell stop the shape at intersections?

    - phyllotaxis


   */
  //FIRST FRAME
  cell_1.show();
  cell_2.show();
  cell_1.move();
  cell_2.move();

 // cell_1.moveHorizontal(3);
//  cell_2.moveHorizontal(-3);

  //SECOND FRAME
  cell_3.show();
  cell_4.show();

  cell_3.move();

  cell_4.move();
//  cell_3.moveVertical(1);
//  cell_4.moveVertical(-1);

  //THIRD AND FINAL FRAME
  cell_5.show();
  cell_5.move();
//  cell_5.moveDiagonal(1.5,1);
  cell_6.show();
  cell_6.move();
//  cell_6.moveDiagonal(1.5,-1);

  cell_7.show();
  cell_7.move();
//  cell_7.moveDiagonal(-1.5,-1);
  cell_8.show();
  cell_8.move();
// cell_8.moveDiagonal(-1.5,1);

}

class Branch {

  constructor(x,y,vx,vy,r = 60){
    this.x = x;
    this.y = y;
    this.r = r;
    this.vx = vx;
    this.vy = vy;
  }

  move(){
    this.x += this.vx;
    this.y += this.vy;
  }
 /* moveHorizontal(side){
    this.x = this.x + side;
  }

  moveVertical(down){
    this.y = this.y + down;
  }

  moveDiagonal(left, right){
    this.x = this.x + left;
    this.y = this.y + right;
  }
  */

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
