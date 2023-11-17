var box, box2
function setup() 
{
  createCanvas(400, 400);
  box = new Box(200,200,50,50,2)
  box2 = new Box(200,100,50,50,-2)
}

function draw() 
{
  background(220);
  box.show();
  box.move();
  box2.show();
  box2.move();
}

