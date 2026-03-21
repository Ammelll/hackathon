class Wrecking_Ball {

    constructor(sprite, x,y,r,dTheta) {
        this.sprite = sprite
        this.x = x;
        this.y = y;
        this.r = r;
        this.dTheta = dTheta;
        this.ox = x;
        this.oy =y;
        this.t = 0
        this.w = 0.04
        this.l = 0.01
        this.vx = 0
    }

    move() {

    }
    draw(p){
        this.t+=1
        this.x = this.ox-p.x;
        this.y = this.oy-p.y;
        let oldx = this.x;
        this.x-= 300*this.l * this.dTheta * Math.cos(this.w*this.t)
        this.y -= this.l * (this.dTheta * this.dTheta / 2) * Math.cos(this.w*this.t) * Math.cos(this.w*this.t)
        this.vx = this.x-oldx
        imageMode(CORNER)
        // image(this.sprite,this.x,this.y, this.w,this.h);
        circle(this.x,this.y,this.r)
    }
    collide(p){
        if(Math.hypot((this.x-p.rx),(this.y-p.ry)) < this.r ){
            p.v.vx -= 2 *this.vx
            p.v.vy = -p.v.vy
        }
    }
}