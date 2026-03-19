const LEFT = 37;
const RIGHT = 39;
const UP = 38;
const DOWN = 40;
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.v = new Velocity(0, 0);
        this.acceleration = 0.5;
        this.maxSpeed = 5;
        this.radius = 25;
        this.isGround = false;
    }
    update() {
        p.collisions()
        p.draw()
        p.playerInputs()
        p.move()
        p.gravity()
        console.log(p.v)

    }
    playerInputs() {
        if (keyIsDown(LEFT)) {
            p.v.vx -= p.acceleration;
        }
        if (keyIsDown(RIGHT)) {
            p.v.vx += p.acceleration;
        }
        if (keyIsDown(UP) && this.isGround) {
            p.v.vy -= 5;
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
        if(this.isGround && this.v.vy > 0){
            this.v.vy = 0
        }
        p.y += this.v.vy
    }
    draw() {
        circle(p.x, p.y, p.radius * 2)
    }
    keyPressed() {

    }
    collisions() {
        p.isGround = false;
        for (let r of rectangles) {
            if (p.x - p.radius < r.x + r.w && p.x + p.radius > r.x &&
                p.y + p.radius > r.y && p.y - p.radius < r.y + r.h) {
                    p.isGround = true;
            }
        }
    }
    gravity() {
        p.v.vy += 0.1
    }
}