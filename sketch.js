const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup(){
    createCanvas(800,400);

   engine = Engine.create();
   world = engine.world;

   Box1 = new Bluebox(500,360,20,30);
   Box2 = new Bluebox(520,360,20,30);
   Box3 = new Bluebox(540,360,20,30);
   Box4 = new Bluebox(560,360,20,30);
   Box5 = new Bluebox(580,360,20,30);
   Box6 = new Bluebox(600,360,20,30);

   Box7 = new Redbox(510,360,20,30);
   Box8 = new Redbox(530,360,20,30);
   Box9 = new Redbox(550,360,20,30);
   Box10 = new Redbox(570,360,20,30);
   Box11 = new Redbox(590,360,20,30);

   Box12 = new Yellowbox(520,360,20,30); 
   Box13 = new Yellowbox(540,360,20,30);
   Box14 = new Yellowbox(560,360,20,30);
   Box15 = new Yellowbox(580,360,20,30);

   Box16 = new Greenbox(530,360,20,30);
   Box17 = new Greenbox(550,360,20,30);
   Box18 = new Greenbox(570,360,20,30);

   Box19 = new Bluebox(540,360,20,30);
   Box20 = new Bluebox(560,360,20,30);

   Box21 = new Redbox(550,360,20,30);


   ball = new Ball(0,0,50);

   spring = new Projectile(ball.body,{x:200,y:200});

   ground = new platform(400,390,800,20);
   groundHovering = new platform(550,160,200,20);
   


}

function draw(){
    background("lightgrey");
    Engine.update(engine);
    debug:true;

    Box1.display();
    Box2.display();
    Box3.display();
    Box4.display();
    Box5.display();
    Box6.display();
    Box7.display();
    Box8.display();
    Box9.display();
    Box10.display();
    Box11.display();
    Box12.display();
    Box13.display();
    Box14.display();
    Box15.display();
    Box16.display();
    Box17.display();
    Box18.display();
    Box19.display();
    Box20.display();
    ball.display();
    spring.display();
    ground.display();
    groundHovering.display();
}

function mouseDragged() {
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});    
}

function mouseReleased(){
    spring.released();
}
function keyPressed(){
    if(keyCode === 32){
        spring.attach(ball.body);
    }
    async function getBackgroundImag(){
        var response = await fetch("https://worldtimeapi.org/timezone/Asia/Kolkata");
        var response = await response.json();

        var datetime = responceJSON.datetime;
        var hour = datetime.slice(11,13);
    }
}