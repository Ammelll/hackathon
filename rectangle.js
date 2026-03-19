class Rectangle {

    constructor(w, x = window.innerWidth) {
        this.x = x
        this.y = Rectangle.randY();
        this.w = Math.floor(Math.random() * 500) + 500;
        this.h = 100;
        this.v = new Velocity(-2, 0);
    }

    move() {
        this.x += this.v.vx;
        this.y += this.v.vy;
    }

    static randY() {
        return Math.floor(Math.random() *  (window.innerHeight - 100 - 100)) + 100;
    }
}