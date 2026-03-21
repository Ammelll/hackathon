class Spikes {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.ox = x;
        this.oy = y
        this.w = w
        this.h = h
    }
    draw(p) {
        this.x = this.ox - p.x;
        this.y = this.oy - p.y;
        fill("red")
        for (let i = 0; i < this.w; i += 10) {
            triangle(this.x + i, this.y, this.x + i + 5, this.y - 20, this.x + i + 10, this.y)
        }
    }
    collide(p) {
        if (p.rx - p.radius < this.x + this.w && p.rx + p.radius > this.x && p.ry - p.radius < this.y + this.h && p.ry + p.radius > this.y) {
            p.reset()
        }
    }
    move() { }
}