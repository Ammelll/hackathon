let downOffset = 80;
class Flag {
    constructor(x,y) {
        this.x = x
        this.y = y
        this.w = 10
        this.h = 100
        this.ox = x;
        this.oy = y;
    }
    draw(p){
        this.x = this.ox-p.x;
        this.y = this.oy-p.y;
        fill("black")
        rect(this.x,this.y,this.w,this.h)
        fill("red")
        triangle(this.x,this.y+downOffset,this.x,this.y+downOffset-20,this.x+50,this.y+downOffset-10)
    }
    collide(p){
         if (p.rx - p.radius < this.x + this.w && p.rx + p.radius > this.x &&
                p.ry - p.radius < this.y + this.h && p.ry + p.radius > this.y) {
                    if(downOffset > 20){
                        downOffset-=0.5
                    }
                    p.v = new Velocity(0,0)
            }
    }
    move(){}
}