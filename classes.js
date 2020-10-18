class Cell {
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = '#000000';

  }

  changeColor(rc,g,b){
    this.rc = rc;
    this.g = g;
    this.b = b;
  }

  contains(x, y){
    let d = dist(x, y, this.x, this.y)
    if (d < this.r){
      return true;
    } else {
      return false;
    }
  }

  move(){
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1,1);
  }

  show(){
    strokeWeight(3);
    stroke('#FFFFFF');
    fill(this.rc, this.g, this.b);
    ellipse(this.x, this.y, this.r*2);
  }
}
