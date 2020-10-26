/*
Project 1 - The Unexpected Machine: Performance Adjective
by Janelle Algarra

Adjective: "chaotic" [ order to caos ]

------------------------
Controls:
1. Mouse - for first scene to interact with the cells
2. Right arrow key - to change between the two scenes

------------------------
Goal:
1. Create alluring visuals (especially in scene 2). I wanted to experiment on that since in the first 3 sketches I wasn't focused on the aesthetics.
2. Cinematic/stop motion feel. I was interested in the scenic animations from the examples of past works. I also wanted a kind of visual story of succeeding events.
3. Order --> chaos was the goal. I was inspired by this youtube video https://youtu.be/_7wKjTf_RlI
4. Figuring out how to code all my ideas :))

------------------------
Main challenges:
1.) First and foremost was the concept. I had a really hard time sticking to one particular idea so in my github repo, you will see that I kept testing different ideas at once. I originally wanted different patterns playing as the circles collide but I realized that would be too much even for the meaning of my adjective.

2.) Timing the sequences - For scene 2, I wanted the collisions to happen one after the other but not at the same time.
    - I couldn't use setTimeout/setInterval especially with the cells slowing down at collision.
    - I wasn't familiar with the use of milliseconds in the programming world so I made boolean statements instead.

3.) Mapping the point of intersection for the colliding cells.
    - in the original demo, it was mostly about setting it to true or false in order to state whether the circles are colliding or not.
    - My challenge was mapping that collision so different patterns play at each position.
    - Solved this with the map function and set the limits into if statements to check and see which pattern is playing

4. This may be just me but I personally struggle a lot with applying the concepts in class to the ideas that I had. I really wanted to push myself for this project and while it may look quite simple now looking back at my code, it was difficult trying to design solutions especially since these aren't problems you can search exactly online and find examples for. I had to keep reviewing the same concept over and over again until I finally got it (and sometimes I still got confused). It also helped to pseudocode and come up withh possible solutions.

-----------------------------
Improvements:
1. Efficiency - A lot of if and booleans statements that could have possible be checked in a loop perhaps? not sure how though.

2. Arrays - I honestly didn't know how I could use arrays for the second scene but this is perhaps because it's still a concept I'm struggling to understand in terms of how to implement it. I thought I could use it for the cells colliding but also I had different roles for each cell so maybe not?

3. Vectors would have been nice to use especially with the patterns and collision but since it was just introduced recently, it would've been hard for me to implement.

4. More organic shapes for patterns. I wanted to make a visual where the cells stick together one by one to form one big cell but I didn't know how to do that since it requires vectors (at least from the examples I saw)

5. More work on animation! I really wanted to make the planets nicer but since it was one of the last minute things I decided to change, I didn't have the time.

------------------------------
ALL MY REFERENCES FROM DANIEL SHIFFMAN:
1. Code! programming with p5.js
    - 7.5 removing objects from an array (used in scene 1)
    - 7.6-7.7 Object Communication part 1 & 2 (used in scene 2)
2. Coding Challenge #30: Phyllotaxis ---> Phyllotaxis equation for pattern_2 of scene 2 [ https://youtu.be/KWoJgHFYWxY ]
*/

// --------------------VARIABLES-------------------------

// SCENE 1

let cells = [];
let num_cell = 1;

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

//for phyllotaxis (pattern_2)
let bg = true;
let n = 0;
let c = 4;

//for checking state (to play one by one)
let frame1 = true, frame2 = false, frame3 = false;
let start1 = false, start2 = false, start3 = false;

//for keyboard presses
let value = "start";


function setup() {
  createCanvas(1200, 800);

  //scene 1
  let x_2 = 600;
  let y_2 = 400;
  let r_2 = 30;
  let c_2 = new Cell(x_2, y_2, r_2);
  cells.push(c_2);


  //scene 2 -- Branch(x, y, vx, vy)
  cell_1 = new Branch(0, 400,3,0);
  cell_2 = new Branch(width, 400,-3,0);
  cell_3 = new Branch(600, 0, 0,4);
  cell_4 = new Branch(600, 800,0,-4);
  cell_5 = new Branch(0, 0, 6, 4);
  cell_6 = new Branch(0, 800, 6,-4);
  cell_7 = new Branch(1200, 800,-6,-4);
  cell_8 = new Branch(1200, 0, -6, 4);

  planets = new Planets();

}

function draw() {

  if(bg == true) // helps with pattern_2 so that the spiral is seen
    background(0);

  //For the keyboard presses

  if(value == "start") {
    scene_1_play();
  }
  else if(value == "next") {
      phase(); //Collision Function call
      scene_2_play(); //Timer Function call
  }

}

//shift between the two scenes
function keyPressed() {
  if(keyCode === RIGHT_ARROW) {
    if(value == "next")
      value = "start";
    else
      value = "next";
  }
}
