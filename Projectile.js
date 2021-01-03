class Projectile{
    constructor(bodyA,pointB){
        var option = {
            bodyA:bodyA,
            pointB=pointB,
            stiffness:0.04,
            length:10,

        }
        this.pointB = pointB;
        this.body = constraint.create(options);
        world.add(world,this.body);
    }
    release(){
        this.body.bodyA = null;
    }
    display(){
        if(this.body.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.bodyb.position;
            
        }
    }
}