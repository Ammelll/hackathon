class Wrecking_Ball {

    constructor(sprite, x, y, r, dTheta) {
        this.sprite = sprite
        this.x = x;
        this.y = y;
        this.r = r;
        this.dTheta = dTheta;
        this.ox = x;
        this.oy = y;
        this.t = 0
        this.w = 0.04
        this.l = 0.01
        this.vx = 0
    }

    move() {

    }
    draw(p) {
        this.t += 1
        this.x = this.ox - p.x;
        this.y = this.oy - p.y;
        let oldx = this.x;
        this.x -= 300 * this.l * this.dTheta * Math.cos(this.w * this.t)
        this.y -= this.l * (this.dTheta * this.dTheta / 2) * Math.cos(this.w * this.t) * Math.cos(this.w * this.t)
        this.vx = this.x - oldx
        imageMode(CORNER)
        line(this.ox - p.x, this.oy - p.y - 500, this.x, this.y)
        image(this.sprite, this.x - this.r / 2, this.y - this.r / 2, this.r, this.r);
    }
    collide(p) {
        let dx = this.x - p.rx;
        let dy = this.y - p.ry;
        let dist = Math.hypot(dx, dy);
        if (dist < this.r - p.radius) {
            let theta = Math.atan2(dy, dx);
            let overlap = (this.r + p.radius) - dist;
            let dvx = overlap * Math.cos(theta)
            let dvy = overlap * Math.sin(theta)
            p.v.vx -= dvx
            p.v.vy -= dvy
        }
    }
}