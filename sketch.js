
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;
	const Constraint = Matter.Constraint;


	var chain;
	var bobObject1;
	var roof1,r2,r3,r4,r5;
	var bo2;
	var co2;
	var bobDiameter;
	var bo3;
	var bo4;
	var co4;
	var co3,co5;
	var bo5;
	var r6;
	function preload()
	{
		
	}

	function setup() {
		createCanvas(800, 700);

		
		engine = Engine.create();
		world = engine.world;

		//Create the Bodies Here.
	bo2=new Paper(455,600,55)
		roof1=new Roof(width/2,400,400,20);
		 
		 
		bobObject1=new Paper(400,600,55);
		bo3=new Paper(510,600,55);
		
		chain=new Constraints(bobObject1.body,roof1.body);
		co2=new Constraints(roof1.body,bo2.body,-55,-55);
		bo5=new Paper(290,600,55);
		co5=new Constraints(roof1.body,bo5.body)
		co3=new Constraints(roof1.body,bo3.body)
		bo4=new Paper(345,600,55);
		co4=new Constraints(roof1.body,bo4.body)
	 
		Engine.run(engine);
	
	}


	function draw() {
	rectMode(CENTER);
	background("white");
	Engine.update(engine);
	
	
	bobObject1.display();

	chain.display();
	roof1.display();
	bo2.display();
	bo3.display();
	co2.display();
	co3.display();
	bo4.display();
	co4.display();
	bo5.display();
	co5.display();

	
 
	}

	 
		   
		 
	   
	
	
	
	




