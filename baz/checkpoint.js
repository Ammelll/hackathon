class Checkpoint extends Flag {

    constructor(...args) {
        super(...args);
        this.h = 75;
        this.color = 'green';
        this.downOffset = 60
    }

    collide(p) {
        if (this.downOffset !== 20 &&
            p.rx - p.radius < this.x + this.w && p.rx + p.radius > this.x &&
            p.ry - p.radius < this.y + this.h && p.ry + p.radius > this.y) {
            this.downOffset = 20;
            // more stuff here
            // I'm a bit confused about how p.reset() works
        }
    }

}