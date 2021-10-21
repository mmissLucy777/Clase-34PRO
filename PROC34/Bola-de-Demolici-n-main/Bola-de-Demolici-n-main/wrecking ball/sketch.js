const Engine = Matter.Engine; //Constante para cargar la biblioteca del motor
const World = Matter.World;  //Constante para cargar la biblioteca del mundo
const Bodies = Matter.Bodies; //Constante para cargar la biblioteca de los cuerpos/objetos/bodies
const Constraint = Matter.Constraint; //Constante para cargar la biblioteca de los cuerpos restringidos

var engine, world;
var ground1;
var box1,box2,box3,box4,box5,box6,box7;
var ball1;
var rope1;

function setup(){ //Función de configuración inicial del juego
  createCanvas (1200,700); //Crea canvas
  engine = Engine.create();   //Crea el motor del juego
  world = engine.world; //Crea el mundo para el motor engine creado anteriormetne
  
  ground1 = new Ground(600,690,1200,20); //Crea un objeto de la clase Ground.js
  box1 = new Box(800,670,50,50);
  box2 = new Box(850,670,50,50);
  box3 = new Box(800,620,50,50);
  box4 = new Box(850,620,50,50);
  box5 = new Box(800,630,50,50);
  box6 = new Box(850,630,50,50);
  box7 = new Box(800,580,50,50);
  box8 = new Box(850,580,50,50);
  box9 = new Box(800,470,50,50);
  box10 = new Box(850,470,50,50);
  box11 = new Box(800,420,50,50);
  box12 = new Box(850,420,50,50);
  box13 = new Box(800,380,50,50);
  box14 = new Box(850,380,50,50);

  ball1 = new Ball(600,600,45,45);
  rope1 = new Rope(ball1.body, {x:500, y:250});
}

function draw(){ //Función para dibujar elementros dentro del canvas
  background("red");  //Color del fondo del canvas
  
  Engine.update(engine);  //Actualiza de manera regular el motor
  ground1.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  ball1.display();

  rope1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x: mouseX, y: mouseY});
}