class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.v = new Velocity(0, 0);
        this.acceleration = 0.5;
        this.maxSpeed = 5;
        this.radius = 25;
    }
    update() {
        p.collisions()
        p.draw()
        p.gravity()
        p.playerInputs()
        p.move()
    }
    playerInputs() {
        if (keyIsDown(37)) {
            p.v.vx -= p.acceleration;
        }
        if (keyIsDown(39)) {
            p.v.vx += p.acceleration;
        }
        if (keyIsDown(38)) {
            p.v.vy -= p.acceleration;
        }
        if (keyIsDown(40)) {
            p.v.vy += p.acceleration;
        }
    }
    move() {
        if (abs(p.v.vx) > p.maxSpeed) {
            p.v.vx = Math.min(Math.max(p.v.vx, -p.maxSpeed), p.maxSpeed);
        }
        if (abs(p.v.vy) > p.maxSpeed) {
            p.v.vy = Math.min(Math.max(p.v.vy, -p.maxSpeed), p.maxSpeed);
        }
        p.x += this.v.vx;

        p.y += this.v.vy
    }
    draw() {
        circle(p.x, p.y, p.radius * 2)
    }
    keyPressed() {

    }
    collisions() {
        for (let r of rectangles) {
            if (p.x - p.radius < r.x + r.w && p.x + p.radius > r.x &&
                p.y + p.radius > r.y && p.y - p.radius < r.y + r.h) {
                p.v.vy = -p.v.vy
            }
        }
    }
    gravity() {
        p.v.vy += 0.05
    }
}