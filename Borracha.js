class Borracha {
    constructor(x, y) {
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':1
        }
        this.body = Bodies.rectangle(x, y,50,50, options);
        this.width = 35;
        this.height = 35;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("black");
		fill("darkblue");
        //fill("gray");
        rect(0, 0, this.width, this.height);
        pop();
      }
    };
    