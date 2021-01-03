class Ball{
    constructor(x,y,radius){
        var option = {
            restitution : 0.8,
            friction : 1.0,
            density : 1.0,
        }
        this.body = Bodies.circle(x,y,radius,option);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        fill(176,216,83);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
    }
}