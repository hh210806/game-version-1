

var background,backgroundImg;
function preload()
{


backgroundImg = loadImage("road2.png");


}



function setup() {
	createCanvas(600, 600);
background = createSprite(300,300);
background.addImage(backgroundImg);
background.scale = 0.5;
  
}


function draw() {

	background.velocityY = 3;
if (background.y > 400){


	background.y = 300;
  }
  
 
  drawSprites();




}
