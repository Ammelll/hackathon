class Crusher {
    constructor(x, y, w, h, range,vi) {
        this.x = x
        this.y = y
        this.ox = x;
        this.oy = y
        this.w = w
        this.h = h
        this.oox = x;
        this.ooy = y;
        this.v = new Velocity(0,-vi)
        this.range = range;
    }
    draw(p) {
        this.x = this.ox - p.x;
        this.y = this.oy - p.y;
        fill("red")
        beginShape();
        //bottom left corner
        vertex(this.x,this.y+this.h),
        vertex(this.x+100,this.y)
        vertex(this.x+this.w-100,this.y)
        vertex(this.x+this.w,this.y+this.h)
        endShape(CLOSE);
        fill("grey")
        rect(this.x+100,this.y-this.h*2,this.w-200,this.h*2)
    }
    collide(p) {
        if (p.rx - p.radius < this.x + this.w && p.rx + p.radius > this.x && p.ry - p.radius < this.y + this.h && p.ry + p.radius > this.y) {
            p.reset()
        }
    }
    move() {
        if (this.range == 0) {
            this.v.vy = 0
        }

        if (this.oy > this.ooy + this.range) {
            this.v.vy = -3;
        }
        if (this.oy < 0) {
            this.v.vy = 3;
        }
        this.ox += this.v.vx;
        this.oy += this.v.vy;
    }
}