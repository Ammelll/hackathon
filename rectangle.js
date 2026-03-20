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
        let rCenterX = this.x + this.w / 2;
        let rCenterY = this.y + this.h / 2;

        let dx = rCenterX- p.rx;
        let dy = rCenterY - p.ry;

        let halfWidths = p.radius + this.w/2;
        let halfHeights = p.radius + this.h / 2;

        if (abs(dx) < halfWidths && abs(dy) < halfHeights) {

            let overlapX = halfWidths - abs(dx);
            let overlapY = halfHeights - abs(dy);

            if (overlapX < overlapY) {
                p.isWall = dx > 0 ? -1 : 1;
            } else {
                p.isGround = true;
            }
        }
    }
    static randY() {
        return Math.floor(Math.random() *  (window.innerHeight - 100 - 100)) + 100;
    }
}