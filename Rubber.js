class Rubber{
	constructor(x,y,r){
	var options = {
	'restitution':0.3,
    'friction':1.0,
    'density':1.0,
	
	}
	// assign options to the rubber ball
	
	//this.body = Bodies.circle(x, y,r,50,50,-20, options);
	this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
	this.width = 50;
	this.height = 50;
	
	World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipse(0, 0, this.r, this.r);

			pop()
	}

}