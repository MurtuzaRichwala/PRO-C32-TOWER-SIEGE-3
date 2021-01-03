class RedBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }
    display(){
        if(this.body.speed <3){
        fill(233,119,121);
        super.display();
    }
    else{
        World.remove(world,this.body);
        Push();
        this.visiblility - 5
        rect(this.x,this.y,20,30);
        Pop();
    }
    
}
}