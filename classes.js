class Cell { // For scene_1
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;

    x+=random(-10,10);
    y+=random(-10,10);
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
    stroke(255);
    fill(this.rc, this.g, this.b);
    ellipse(this.x, this.y, this.r*2);
  }
}


class Branch { // For scene_2
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


class Planets{ // For scene_2 visuals
  contructor(){
  //not sure if I needed this D: but I didn't find anything to put
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
    frameRate(f_rate); // to slow down te movements so it's not too chaotic at the start

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
