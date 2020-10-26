//-------------SECOND SCENE ---------------------

function scene_2_play(){

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
    //Once frame 2 starts
    cell_3.show();
    cell_4.show();
    cell_3.move();
    cell_4.move();
    if(start2 == true && cell_3.y >= height + 60 && cell_4.y <= -60) { //60 is the radius (r) initialized in class Branch
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
      n = 0; // Without this, the phyllotaxis won't appear again (this was one of my struggles when I was troubleshooting but it works now because of this)
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

// ---------------1ST COLLISION (Scene_2)-------------------
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

// ---------------2ND COLLISION (Scene_2)-------------------

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
    cell_3.vy = 4;
    cell_4.vy = -4;
  }

// ---------------FINAL COLLISION (Scene_2)-------------------
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
