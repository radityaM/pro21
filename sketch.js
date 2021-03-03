var canvas;
var music1;
var surface1,surface2,surface3,surface4;
var box;
var edge1,edge2,edge3;

function preload(){
    music1 = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(100,570,190,30);
    surface1.shapeColor="blue";
    surface2=createSprite(300,570,190,30);
    surface2.shapeColor="orange";
    surface3=createSprite(500,570,190,30);
    surface3.shapeColor="purple";
    surface4=createSprite(700,570,190,30);
    surface4.shapeColor="green";
    //create box sprite and give velocity
    box=createSprite(400,70,50,50);
    box.shapeColor="white";
    box.setVelocity(random(-3,3),6);

    edge1=createSprite(810,300,10,600);
    edge2=createSprite(-10,300,10,600);
    edge3=createSprite(400,-10,800,10);

}

function draw() {
    background(rgb(169,169,169));

    box.bounceOff(edge1);
    box.bounceOff(edge2);
    box.bounceOff(edge3);

    if(box.isTouching(surface1)){
        box.shapeColor="blue";
        box.bounceOff(surface1);
        music1.play();
        music1.play();
        music1.play();

    }

    if(box.isTouching(surface2)){
        box.shapeColor="orange";
        box.setVelocity(0,0);
        music1.stop();
    }

    if(box.isTouching(surface3)){
        box.shapeColor="purple";
        box.bounceOff(surface3);
    }

    if(box.isTouching(surface4)){
        box.shapeColor="green";
        box.bounceOff(surface4);
    }


    //add condition to check if box touching surface and make it box

    drawSprites();
}
