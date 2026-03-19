class Player {
    constructor(x, y,sprite) {
        this.x = x;
        this.y = y;
        this.v = new Velocity(0, 0);
        this.acceleration = 0.5;
        this.maxSpeed = 5;
        this.radius = 25;
        this.isGround = false;
        this.sprite = sprite;
        this.angle = 0;
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
            this.angle-=5
        }
        if (keyIsDown(39)) {
            p.v.vx += p.acceleration;
            this.angle+=5
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
        imageMode(CENTER);
        translate(p.x, p.y);
        rotate(PI/180 * this.angle);
        image(img, 0, 0, p.radius*2, p.radius*2);
        rotate(-PI / 180 * this.angle);
        translate(-(p.x), -(p.y));

        // image(img, p.x-p.radius, p.y-p.radius,p.radius*2,p.radius*2);
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