function pattern_1(){ // White noise for scene_2 collision 3
  for (let i = 0; i < 500; i++) {
      noStroke();
      fill(random(255),random(255));
      //fill(random(255), random(255), random(255), random(255)); //-- >rainbow
      ellipse(random(width), random(height), random(100));
      triangle(random(width), random(height), random(width), random(height), random(width), random(height));

    }
}

function pattern_2(){ // Phyllotaxis for scene_2 collision 3
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
