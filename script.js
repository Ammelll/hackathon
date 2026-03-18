const print = console.log
class Rectangle{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}
class Velocity{
    constructor(x,y){
        this.vx = x;
        this.vy = y;
    }
}
class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.v = new Velocity(0,0);
        this.acceleration = 0.5;
        this.maxSpeed = 5;
        this.radius = 25;
    }
    update(){
        p.collisions()
        p.draw()
        p.gravity()
        if(abs(p.v.vx) > p.maxSpeed){
            p.v.vx = Math.min(Math.max(p.v.vx, -p.maxSpeed), p.maxSpeed);
        }
        if(abs(p.v.vy) > p.maxSpeed){
            p.v.vy = Math.min(Math.max(p.v.vy, -p.maxSpeed), p.maxSpeed);
        }
        p.x+=this.v.vx;

        p.y+=this.v.vy
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
    draw(){
        circle(p.x,p.y,p.radius*2)
    }
    keyPressed(){
         
    }
    collisions(){
        for(let r of rectangles){
            print( )
            if (p.x-p.radius < r.x+r.w && p.x+p.radius > r.x &&
                p.y+p.radius > r.y && p.y-p.radius < r.y+r.h ){
                    p.v.vy = -p.v.vy
                }
        }
    }
    gravity(){
        p.v.vy+=0.05
    }
}

let p;
let rectangles = [new Rectangle(0,500,1000,100)];
function setup() {
    p = new Player(100,100)
  createCanvas(window.innerWidth, window.innerHeight);
}
function draw() {
  background(220);
  p.update()
  drawRectangles();
}
function drawRectangles(){
    for(let r of rectangles){
        rect(r.x,r.y,r.w,r.h)
    }
}
