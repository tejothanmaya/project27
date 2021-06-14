class Stone {
    constructor(x,y,width,height,angle){
        var options = {
            'restitution' : 1,
            'friction' : 0.9,
            'density' : 20
        }
        this.body = Bodies.rectangle(200,300,50,50,options);
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }
    display(){
        var stonepos = this.body.position;
        var angle = this.body.angle;
       push()
       translate(stonepos.x,stonepos.y);
       rotate(angle);
       strokeWeight(4);
       stroke("red");
        fill("black");
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop()
       
    }
}