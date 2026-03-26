const LEFT = 37;
const RIGHT = 39;
const UP = 38;
const DOWN = 40;
const R = 82;
const AIR_RESISTANCE_FACTOR = 0.25
const MAX_SPEED = 6;


class Player {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
        this.rx = x;
        this.ry = y;
        this.v = new Velocity(0, 0);
        this.acceleration = 0.5;
        this.radius = 25;
        this.isGround = false;
        this.sprite = sprite;
        this.angle = 0;
        this.level = 0;
        //negative = left, 0 = nothing, positive = right
        this.isWall = 0;
        this.gravity = 0.1;
    }
    update() {
        this.collisions()
        this.draw()
        this.playerInputs()
        this.move()
        this.applyGravity()
        this.death()
    }
    playerInputs() {
        print(scalex,scaley)
        if (keyIsDown(LEFT)) {
            this.v.vx -= this.acceleration * (this.isGround ? 1 : AIR_RESISTANCE_FACTOR) * scalex;
        }
        if (keyIsDown(RIGHT)) {
            this.v.vx += this.acceleration * (this.isGround ? 1 : AIR_RESISTANCE_FACTOR) * scalex;
        }
        if (keyIsDown(UP) && this.isGround) {
            this.v.vy -= 5 * scaley;
        }
        if (keyIsDown(R)) {
            this.reset();
        }
    }
    move() {
        if (abs(this.v.vx) > MAX_SPEED * scalex) {
            this.v.vx = Math.min(Math.max(this.v.vx, -MAX_SPEED * scalex), MAX_SPEED * scalex);
        }
        if (abs(this.v.vy) > MAX_SPEED * scaley) {
            this.v.vy = Math.min(Math.max(this.v.vy, -MAX_SPEED * scaley), MAX_SPEED * scaley);
        }
        this.angle += this.v.vx

        if (this.isWall != 0) {
            if (this.isWall < 0 && this.v.vx > 0) {
                this.v.vx = 0
            }
            if (this.isWall > 0 && this.v.vx < 0) {
                this.v.vx = 0
            }
        }
        this.x += this.v.vx;

        if (this.isGround && this.v.vy > 0) {
            this.v.vy = 0
        }

        this.y += this.v.vy
    }
    draw() {
        fill('white')
        imageMode(CENTER);
        translate(this.rx, this.ry);
        rotate(PI / 180 * this.angle);
        image(this.sprite, 0, 0, this.radius * 2, this.radius * 2);
        rotate(-PI / 180 * this.angle);
        translate(-(this.rx), -(this.ry));

        // image(img, this.x-this.radius, this.y-this.radius,this.radius*2,this.radius*2);
    }

    collisions() {
        this.isGround = false
        this.isWall = 0;
        for (let r of levels[this.level]) {
            r.collide(this)
        }
    }
    applyGravity() {
        this.v.vy += this.gravity * scalex
    }
    death() {
        if (this.y > 500) {
            this.reset()
        }
    }
    reset() {
        this.x = this.rx
        this.y = this.ry
        this.v = new Velocity(0, 0)
        for (let r of levels[this.level]) {
            if(r instanceof Rectangle){
                r.reset();
            }
        }
    }
}