const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {

    getBackgroundImg(); 

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();

   

    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add

    if(backgroundImg){

        background(backgroundImg);

    }

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON = await response.json();
 //console.log(responseJSON);
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13)
  //1
  if(hour>= 04 && hour<= 06){

   bg = "sunrise1.png";

  }
  //2
  else if(hour>= 07 && hour<= 08){

   bg = "sunrise2.png";

  }
  //3
  else if(hour>= 00 && hour<= 10){

    bg = "sunrise3.png";
 
   }
   //4
   else if(hour>= 11 && hour<= 0){

    bg = "sunrise4.png";
 
   }
    //5
   else if(hour>= 13 && hour<= 14){

    bg = "sunrise5.png";
 
   }
   //6
   else if(hour>= 15 && hour<= 16){

    bg = "sunrise6.png";
 
   }
   //7
   else if(hour>= 17 && hour<= 18){

    bg = "sunrise8.png";
 
   }
   //8
   else if(hour>= 19 && hour<= 20){

    bg = "sunrise9.png";
 
   }
//9
else if(hour>= 21 && hour<= 22){

    bg = "sunrise10.png";
 
   }
   else if(hour>= 23 && hour<= 24){

    bg = "sunrise11.png";
 
   }
  backgroundImg = loadImage(bg);

}