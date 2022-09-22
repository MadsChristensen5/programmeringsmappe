//Øvelse  1
/*
console.log(2 == 2); 
"Der kommer til at stå 2"
console.log(2 == '2'); 
"Den kommer ikke til at være true og dermed står der ikke 2"
console.log(3 != 2); 
"Den kommer til at være true da 3 ikke er ligmed 2"
console.log('hello' != 'Hello'); 
"Den burde være true, men da den ene har stort for bogstav og den anden
har et lille er der mulighed for at den er false"
console.log(2 === 2); 
"den er true"
console.log(2 === '2'); 
"Den er ikke true da den ene er en char"
console.log(2 !== '2'); 
"Den er true men kun på grund af udråbstegnet"
console.log(2 !== 2);
"not true"
*/

//Øvelse 2
/*
//Det jeg starter med er at opsætte de forskellige start commands
//SÅ Som function setup og function draw
function setup(){
createCanvas(500,500);
background(255);
}

//Det jeg har skrevet i koden er at hvis musen er på et hvis koordinat
// Så vil den tegnede cirkel blive til en rektangel
//Jeg har bare tilføjet Rgb farver fordi jeg kan:)
function draw(){
    fill(200,100,40);
    background(255);

if(mouseX<250||mouseY>270){
    fill(random(255),random(255),random(255))
rect(250,250,70,50)
} 
else ellipse(250,250,50,50);
}
*/

//Øvelse 3

/*
console.log(2 == 2 && 2 == '2');
Den her bliver true
console.log(2 == 2 && 2 == '2' && 2 === '2');
Den her bliver false
console.log(2 == 2 && 2 == '2' || 2!=2);
Den her bliver true
console.log('hello' != 'Hello' && 'hello' !== 'Hello');
Den her bliver true
console.log('hello' != 'Hello' || 'hello' !== 'hello' && 'hello' !== 'heLLo');
Den her bliver true
console.log(2 === 2 || 2!=3 ); 
Den her bliver true
console.log(2 === 2 || 2!='2' && (true || false));
Den her bliver true
*/

//Øvelse 4
/*
function setup() { 
    createCanvas(600, 400);
  } 
  
  function draw() { 
    background(220);
    fill(255,0,0);
    noStroke();
    if (mouseX < width/3) {
      rect(0, 0, width/3, height);
    }
    else if (mouseX <= width*2/3) {
      rect(width/3, 0, width/3, height);
    }
    else {
      rect(width*2/3, 0, width/3, height);
    }
  }

//Det der sker i koden er at han har lavet noget så hvis mouseX har et af
//De 3 følgende koordinater, så ville en af de 3 meget lange rektangler
//Blive rød og de andre grå.
  */

//Øvelse 4 part ||
/*
let x;
let xspeed = 3;

function setup() { 
  createCanvas(400, 400);
  x = width / 2;
} 

function draw() { 
  background(220);
  if (x > width - 25 || x < 0 + 25) {
    xspeed *= -1;
  }
  
  //Move
  x += xspeed;
  circle(x, height/2, 50);
}
//Han har givet bolden en hvis hastighed for x aksen så bolden ryger frem
//og tilbage 
*/

//Øvelse 5
/*
let y;
let yspeed = 3;

function setup() { 
  createCanvas(400, 400);
  y = height / 2;
} 

function draw() { 
  background(random(255),random(255),random(255));
  if (y > height - 25 || y < 0 + 25) {
    yspeed *= -1;
  }
  
  //Move
  y += yspeed;
  fill(random(255),random(255),random(255))
  circle(height/2, y, 50);
}
*/

//Øvelse 6

/*
function setup() { 
    createCanvas(120, 120); 
    strokeWeight(30); 
    } 
    function draw() { 
     background(204); 
     stroke(102); 
     line(40, 0, 70, height); 
     if (mouseIsPressed) { 
        //MouseIsPressed Er at du siger til koden at hvis denne mussetast
        //er nede gør den følgende komando
      if (mouseButton == LEFT) {  // og hvad med den?
        //Det samme som sidst bare hvor du siger t det er venstre mussetast

       stroke(255); 
      } 
      else { 
       stroke(0); 
      } 
      line(0, 70, width, 50);
      } 
    } 
    */

    //Øvelse 7

    /*
    function setup() 
{ 
 createCanvas(120, 120); 
} 
function draw() 
{ 
 background(204); 
 if (keyIsPressed) {  //hvad er denne variable mon for en type?
  if ((key == 'h') || (key == 'H')) { line(30, 60, 90, 60); } 
  if ((key == 'n') || (key == 'N')) { line(30, 20, 90, 100); } 
 } 
line(30, 20, 30, 100); 
line(90, 20, 90, 100); 
} 
//Det han har gjort er at han har gjort så at hvis man trykker på h eler n
//Så vil den  tilføje en streg mellem de to linjer der gør det til
//Følgende bogstaver
*/

//Øvelse 8
/*
function setup() 
{ 
 createCanvas(120, 120); 
} 
function draw() 
{ 
 background(204); 
 if (keyIsPressed) {  
  if ((key == 'a') || (key == 'A')) { line(45, 60, 70, 60),
     line(30,80,60,40),  line(80,80,60,40); } 
  if ((key == 'v') || (key == 'V')) { line(40, 80, 60, 100),line(40, 60, 60, 100); } 
 } 

} 
*/

/*
let x = 100;
let y = 100;

function setup() {
  createCanvas(512, 512);
  fill(255, 0, 0);
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  clear();
  circle(x, y, 50);
}
//Han har gjort så hvis en af tasterne på keyboarded er 
*/

//Øvelse 10
/*
let x = 100;
let y = 100;
let img;

function setup() {
  createCanvas(512, 512);
  fill(255, 0, 0);
  img = loadImage("standard_compressed_mus.jpg")
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  clear();
  image(img,x,y);
}
*/

//Katten efter musen

let x = 250;
let y = 250;
let xKat = 150;
let ykat = 200;
let b = 1;
let d =20;
let KatXspeed = 5;
let KatYspeed = 5;
let scorepoint = 0;


function setup(){
    createCanvas(500,500);
    background(255)
    img = loadImage("cursed-mouse.jpg")
   jason = loadImage("Dvd.jpg")


}

function draw(){

    background(255);
    image(img, x,y,50, 50);
    image(jason,xKat,ykat,50,50)

    if
    (keyIsDown(LEFT_ARROW)){
    x -= 5;
  }
  if
   (keyIsDown(RIGHT_ARROW)){
    x += 5;
   }
    if
      (keyIsDown(UP_ARROW)){
        y -= 5;
      }
    if
      (keyIsDown(DOWN_ARROW)){
        y += 5;
      }
      
    xKat+=KatXspeed
    ykat += KatYspeed

    

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

    mat = Math.sqrt(((xKat-x)*(xKat-x))+((ykat-y)*(ykat-y)))
    if (mat < 100){
        background(255,0,0)
        scorepoint = 0
  
      }

    

      text(scorepoint,250,100)

}