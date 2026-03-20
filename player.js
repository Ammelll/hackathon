const LEFT = 37;
const RIGHT = 39;
const UP = 38;
const DOWN = 40;
const AIR_RESISTANCE_FACTOR = 0.08
class Player {
    constructor(x, y,sprite) {
        this.x = x;
        this.y = y;
        this.rx = x;
        this.ry = y;
        this.v = new Velocity(0, 0);
        this.acceleration = 1;
        this.maxSpeed = 5;
        this.radius = 25;
        this.isGround = false;
        this.sprite = sprite;
        this.angle = 0;
        this.isWall = false;
    }
    update() {
        p.collisions()
        p.draw()
        p.playerInputs()
        p.move()
        p.gravity()
    }
    playerInputs() {
       if (keyIsDown(LEFT)) {
            p.v.vx -= p.acceleration * this.isGround ? 1 : AIR_RESISTANCE_FACTOR;
        }
        if (keyIsDown(RIGHT)) {
            p.v.vx += p.acceleration * this.isGround ? 1 : AIR_RESISTANCE_FACTOR;
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
        p.angle+=this.v.vx
        if(this.isWall){
            this.v.vx = 0
        }
        p.x += this.v.vx;

        if(this.isGround && this.v.vy > 0){
            this.v.vy = 0
        }

        p.y +=this.v.vy
    }
    draw() {
        imageMode(CENTER);
        translate(window.innerWidth/2, window.innerHeight/2-300);
        rotate(PI/180 * this.angle);
        image(img, 0, 0, p.radius*2, p.radius*2);
        rotate(-PI / 180 * this.angle);
        translate(-(window.innerWidth/2), -(window.innerHeight/2-300));

        // image(img, p.x-p.radius, p.y-p.radius,p.radius*2,p.radius*2);
    }
    keyPressed() {

    }
    collisions() {
        this.isGround = false
        for (let r of rectangles) {
            if (p.rx - p.radius < r.x + r.w && p.rx + p.radius > r.x &&
                p.ry - p.radius < r.y + r.h && p.ry + p.radius > r.y) {
                    this.isGround = true;
            }
        }
    }
    gravity() {
        p.v.vy += 0.1
    }
}