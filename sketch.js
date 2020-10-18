let cells = [];
let num_cell = 1;

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 1; i++){
    let x = 400;
    let y = 400;
    let r = 30;
    let b = new Cell(x, y, r);
    cells.push(b);
  }
}


function mousePressed() {
    for(let i=0; i < cells.length; i++){
    if (cells[i].contains(mouseX, mouseY)){
      cells.splice(i,1);
      num_cell *= 2;

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

function draw() {
  background(0);

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
