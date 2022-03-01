const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
//var rubber;
var rock;
var iron
var borracha

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    //rubber = new Rubber(10,170);
    rock =new Rock(200,190)
    iron =new Iron(300,200)
    borracha =new Borracha(400,300)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
   // rubber.display();
    rock.display();
    iron.display();
    borracha.display();

    
 
}