//-------------FIRST SCENE ---------------------
function scene_1_play() {
      for(let i=0; i < cells.length; i++){
      if (cells[i].contains(mouseX, mouseY)){
        cells[i].changeColor(random(255), random(255), random(255));
      } else {
        cells[i].changeColor(0,0,0);
      }
      cells[i].move();
      cells[i].show();
    }
}

//------------------ACTION---------------------
function mousePressed() { //Scene_1

//deletes cells

    for(let i=0; i < cells.length; i++){
    if (cells[i].contains(mouseX, mouseY)){
      cells.splice(i,1);
      num_cell *= 2;

//Adds new cells for each splice
// I had to limit how many appear otherwise it would crash. So I decided that after a certain number then the program will start splicing again.

      for(let j=0; j<num_cell; j++){
      if (num_cell < 1000){
      cells.push(new Cell(random(width),random(height), random(10,30)));
      }else{
        return false;
      }
      }
    }
  }
}
