class Box{
    constructor(x,y,width,height){
        var option = {
         isStatic:true
        }
        this.body = Bodies.rectangele(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        fill(64,45,38);
        rect(pos.x,pos.y,this.width,this.height);
        rectMode(CENTER);
    }
}