class Rectangle {

    constructor(x,y,w,h = 60) {
        this.x = x
        this.y = y
        this.ox = x;
        this.oy = y;
        this.w = w;
        this.h = h;
        this.v = new Velocity(0, 0);
    }

    move() {
        this.x += this.v.vx;
        this.y += this.v.vy;
    }
    draw(p){
        this.x = this.ox-p.x;
        this.y = this.oy-p.y;
        rect(this.x, this.y, this.w, this.h);
    }
    static randY() {
        return Math.floor(Math.random() *  (window.innerHeight - 100 - 100)) + 100;
    }
}