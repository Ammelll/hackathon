class Flag {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 5;
        this.h = 100;
        this.ox = x;
        this.oy = y;
        this.color = 'red';
        this.downOffset = 80;
    }
    draw(p) {
        this.x = this.ox - p.x;
        this.y = this.oy - p.y;
        fill("black")
        rect(this.x, this.y, this.w, this.h)
        fill(this.color)
        triangle(this.x, this.y + this.downOffset, this.x, this.y + this.downOffset - 20, this.x + 50, this.y + this.downOffset - 10)
    }
    collide(p) {
        if (p.rx - p.radius < this.x + this.w && p.rx + p.radius > this.x &&
            p.ry - p.radius < this.y + this.h && p.ry + p.radius > this.y) {
            if (this.downOffset > 20) {
                this.downOffset -= 0.5
            } else {
                p.level += 1;
                p.reset()
            }
            p.v = new Velocity(0, 0)
        }
    }
    move() { }
}