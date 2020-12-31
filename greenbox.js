class GreenBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
        if(this.body.speed<3){
            fill(87,220,206);
            super.display(); 
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibility = this.visibility-5;
            tint(255,this.visibility);
            rect(this.x,this.y,20,30);
            pop();
        }
    }
    
}