class Triangle {

    constructor(sprite, x1,y1,x2,y2,x3,y3) {
        this.sprite = sprite;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.ox1 = x1;
        this.oy1 = y1;
        this.ox2 = x2;
        this.oy2 = y2;
        this.ox3 = x3;
        this.oy3 = y3;
        this.run = this.x3-this.x1;
        this.rise =  this.y2-this.y1
    }
    move(){

    }
    draw(p){
        this.x1 = this.ox1-p.x;
        this.y1 = this.oy1-p.y;
        this.x2 = this.ox2-p.x;
        this.y2 = this.oy2-p.y;
        this.x3 = this.ox3-p.x;
        this.y3 = this.oy3-p.y; 
        imageMode(CORNER)

        image(this.sprite,this.x1,this.y1,this.run,this.rise);
    }
  
    collide(p){
        if(p.rx > this.x1 && p.rx < this.x3){
            if(p.ry+p.radius > this.y1+(p.rx-this.x1) * (this.rise/this.run)){
                p.v.vx += p.gravity * Math.sin(Math.atan2(this.rise,this.run))
                if(p.v.vx > 0){
                    p.v.vy = -p.gravity-p.v.vx
                } else{
                    p.v.vy = 0;
                }
            }
        }
    }
    static randY() {
        return Math.floor(Math.random() *  (window.innerHeight - 100 - 100)) + 100;
    }
}