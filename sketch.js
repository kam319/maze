var ant;
var maze;
var apple;



function preload(){
  ant= loadImage('ant.png');
  maze= loadImage('MAZE.jpg')
  apple= loadImage('apple.jpg')

}

function setup() {
createCanvas(2000,1000);

}


function draw(){
  background(0,255,0);
  tint(255,0,255);
  image(maze,0,0,800,500);
  tint(255,0,255);
  image(apple,350,500,100,100);
  tint(255);
  image(ant,mouseX,mouseY,50,50);
}
//js stands for java script , set ups draw once while draw puts up 60 frames per second
