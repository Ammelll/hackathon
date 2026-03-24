class Rectangle {

    constructor(sprite, x, y, w, h = 60, rangeX = 0, rangeY = 0, delay = -1) {
        this.x = x
        this.y = y
        this.ox = x;
        this.oy = y;
        this.oox = x;
        this.ooy = y;
        this.w = w;
        this.h = h;
        this.v = new Velocity(-1, -1);
        this.sprite = sprite
        this.rangeY = rangeY;
        this.rangeX = rangeX
        this.delay = delay;
    }

    move() {
        if (this.rangeY == 0) {
            this.v.vy = 0
        }
        if (this.rangeX == 0) {
            this.v.vx = 0
        }
        if (this.oy > this.ooy + this.rangeY) {
            this.v.vy = -3;
        }
        if (this.oy < this.ooy - this.rangeY) {
            this.v.vy = 3;
        }
        if (this.ox > this.oox + this.rangeX) {
            this.v.vx = -3;
        }
        if (this.ox < this.oox - this.rangeX) {
            this.v.vx = 3;
        }
        this.ox += this.v.vx;
        this.oy += this.v.vy;
    }
    draw(p) {
        this.x = this.ox - p.x;
        this.y = this.oy - p.y;
        imageMode(CORNER)
        image(this.sprite, this.x, this.y, this.w, this.h);
    }
    collide(p) {

        let rCenterX = this.x + this.w / 2;
        let rCenterY = this.y + this.h / 2;

        let dx = rCenterX - p.rx;
        let dy = rCenterY - p.ry;

        let halfWidths = p.radius + this.w / 2;
        let halfHeights = p.radius + this.h / 2;

        if (abs(dx) < halfWidths && dy < halfHeights ) {
                    if(this.delay != -1){
            setTimeout(() => {this.oy = 5000},this.delay)
        }
            let overlapX = halfWidths - abs(dx);
            let overlapY = halfHeights - abs(dy);
            if (overlapX < overlapY) {
                p.isWall = dx > 0 ? -1 : 1;
            } else {
                p.isGround = true;
                p.v.vy = this.v.vy
            }
        }
    }
}