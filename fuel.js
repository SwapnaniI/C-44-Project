class Enemy{
    constructor(x,y,w,h,vel){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.xVelocity = vel;
        this.image = loadImage("star.png")
    }
    display(){
        push();
            imageMode(CENTER);
            image(this.image,this.x,this.y,this.w,this.h)
        pop();
    }

    update(){      
        this.x += this.xVelocity ;
    }
    
    isComplete(){
        if(this.x +this.w/2 < 0){
            return true;
        }
    }
}