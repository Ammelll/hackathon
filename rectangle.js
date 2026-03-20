class Rectangle {

    constructor(sprite, x,y,w,h = 60) {
        this.x = x
        this.y = y
        this.ox = x;
        this.oy = y;
        this.w = w;
        this.h = h;
        this.v = new Velocity(0, 0);
        this.sprite = sprite
    }

    move() {
        this.x += this.v.vx;
        this.y += this.v.vy;
    }
    draw(p){
        this.x = this.ox-p.x;
        this.y = this.oy-p.y;
        imageMode(CORNER)
        image(this.sprite,this.x,this.y, this.w,this.h);
    }
    collide(p){
        if (p.rx - p.radius < this.x + this.w && p.rx + p.radius > this.x &&
            p.ry - p.radius < this.y + this.h && p.ry + p.radius > this.y) {
                p.isGround = true;
        }
    }
    static randY() {
        return Math.floor(Math.random() *  (window.innerHeight - 100 - 100)) + 100;
    }
}