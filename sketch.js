var dogImg, happyDogImg, database, foodS, foodStock, readStock, dog, happyDog
function preload()
{
  
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('Food');
  dog = createSprite(250,300,150,150);
  foodStock.on("value", readStock);
  dog.addImage(dogImg);
  dog.scale = 0.5;
}


function draw() {  
  background(49,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg)
  }

 drawSprites();

textSize(10);
 fill(255);
 text("Note: Press UP_ARROW key To Feed Drago Milk!", 250, 20);

}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food: x
  })
}



