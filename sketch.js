const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var thunder, thunder1, thunder2, thunder3, thunder4;
var engine, world;

var drops = [];
var rand;
var maxDrops = 100;
var thunderCreatedFrame = 0;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
    createCanvas(1300, 700);
    engine = Engine.create();
    world = engine.world;
    
    umbrella = new Umbrella(200, 500);
    house = new House();
   
    //creating drops
    if(frameCount % 150 === 0){
        for(var i = 0; i < maxDrops; i++){
            drops.push(new Drop(random(0, 1300), random(0, 600)));
        }
    }

    Engine.run(engine);
}


function draw(){
    background(0);
    Engine.update(engine);

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount % 80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,1270), random(10,30), 20, 20);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.5,0.8)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }


    umbrella.display();
    house.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    drawSprites();
    
}   