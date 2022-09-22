//Katten efter musen



//Mine variabler
let x = 250;
let y = 250;
let xKat = 150;
let ykat = 200;
let Yk = 200;
let xk = 150;
let b = 1;
let d =20;
let KatXspeed = 5;
let KatYspeed = 5;
let scorepoint = 0;
let border0x = false
let borderx = false
let border0y = false
let bordery = false
let ykSpeed = 5;
let xkSpeed = 5;
let highscore = 0;
let button;


function setup(){
  //Laver mit spillested og der hvor spillet foregår, samt farven på baggrunden som jeg har sat til at være hvid
    createCanvas(500,500);
    background(255)
    //Loader mine Billeder
    img = loadImage("cursed-mouse.jpg")
   jason = loadImage("kittycat-bro.jpg")


}

function draw(){
  //Jeg giver baggrunden en farve
    background(255);
    //mine katte og min spillers bileder og x og y koordinator og bredden og højden på dem.
    image(img, x,y,50, 50);
    image(jason,xKat,ykat,50,50)
    image(jason,xk,Yk,50,50)

    //Det der får min spiller(musen), til at bevæge sig via piltasterne. via functionen KeyIsDown.
    if
    (keyIsDown(LEFT_ARROW) && border0x == false){
    x -= 5;
  }
  if
   (keyIsDown(RIGHT_ARROW) && borderx == false){
    x += 5;
   }
    if
      (keyIsDown(UP_ARROW) && border0y == false){
        y -= 5;
      }
    if
      (keyIsDown(DOWN_ARROW) && bordery == false){
        y += 5;
      }
      
      //Dem der senere gør det muligt at få bevægelse i mine katte
    xKat+=KatXspeed
    ykat += KatYspeed

    xk += xkSpeed
    Yk += ykSpeed
    

      //Det er det holder styr på at mine katte ikke kommer over boardet og bare kan forsvinde
    if (Yk > 440){
      ykSpeed = random(-5,-2)
      scorepoint += 10
  }
  
  if (Yk < 40){
      ykSpeed = random(5,2)
      scorepoint += 10
  }
  if (xk < 40){
      xkSpeed = random(5,2)
      scorepoint += 10
  }
  if (xk > 440){
      xkSpeed = random(-5,-2)   
      scorepoint += 10
  }



    if (ykat > 440){
        KatYspeed = random(-5,-2)
        scorepoint += 10
    }
    
    if (ykat < 40){
        KatYspeed = random(5,2)
        scorepoint += 10
    }
    if (xKat < 40){
        KatXspeed = random(5,2)
        scorepoint += 10
    }
    if (xKat > 440){
        KatXspeed = random(-5,-2)   
        scorepoint += 10
    }

    //Det er det der sikrer at min spiller(musen), ikke bare kan forsvinde ud i det uendelige. Men at den er fanget i et canvas på 500,500
    if (x > 440){
      borderx = true
  } else borderx = false
  
  if (y < 40){
    border0y = true
  } else border0y = false
  
  if (x < 40){
     border0x = true
  } else border0x = false
 
  if (y > 440){
    bordery = true 
  } else bordery = false      

  
  //Det der siger at når mine katte støder ind i musen, så bliver scoren nulstillet og baggrunden skifter til rgb farver:)  
    mat = Math.sqrt(((xKat-x)*(xKat-x))+((ykat-y)*(ykat-y)))
    if (mat < 100){
        background(random(255),random(255),random(255));
        scorepoint = 0
  
      }
      mat = Math.sqrt(((xk-x)*(xk-x))+((Yk-y)*(Yk-y)))
      if (mat < 100){
          background(random(255),random(255),random(255));
          scorepoint = 0
    
        }


        //Det der siger at når ens score er større end ens highscore, så er ens core lig med ens highscore.
        if(scorepoint > highscore){
          highscore = scorepoint
        }

        //Det jeg laver her er feltet for toppen af skermen hvor man kan se sin score og sin highscore
        fill(200)
        rect(0,0,500,50)
        fill(0,0,255);
        text("highscore: "+highscore,0,40)
      text("points: "+scorepoint,0,20)
     
      //Bare til dekoration:)
      button = createButton('Contact Us')
      button.position(400,0)




      }