let cell_1;
let cell_2;
let n = 0;
let c = 4;


function setup() {
  createCanvas(1200, 800);
  cell_1 = new Branch(0, 400);
  cell_2 = new Branch(width, 400);

}

function draw() {
  background(0);

  if (cell_1.collides(cell_2)){
     background(200,0,100);

    /* PATTERNS */

    for (let i = 0; i < 500; i++) {
      fill(random(255), random(255), random(255), random(255));
      ellipse(random(width), random(height), random(100));
      triangle(random(width), random(height), random(width), random(height), random(width), random(height));


    //cell_1.moveForward(0.5);
    //cell_2.moveBackward(0.5);
    }

/*---------------------*/
    /*SLOW DOWN THE TWO CELLS AT THE INTERSECTION
    - DIFFERENT PATTERNS PLAYING PER POSITION OF   THE CELLS

    -When the first two circles are done, I want other circles to appear to make collisions that provide different graphics

    - make circle faster after the collision/or make them bigger

    -purpose of having different classes? why are there variables under class and then under constructor?

    - diff colors for explotion from phyllotaxis

    - stop the shape at intersections?

   */
  }

  cell_1.show();
  cell_2.show();
  cell_1.moveForward(3);
  cell_2.moveBackward(3);

}

class Branch {

  constructor(x,y,r = 60){
    this.x = x;
    this.y = y;
    this.r = r;
  }

  moveForward(f){
    this.x = this.x + f;
    /*this.y = this.y;*/
  }

  moveBackward(b){
    this.x = this.x - b;
    /*this.y = this.y;*/
  }

  show(){
    stroke(255);
    noFill();
    ellipse(this.x, this.y, this.r*2);
  }

  collides(other){
    let d = dist(this.x,this.y, other.x, other.y)
    return (d < this.r + other.r);
  }

}
