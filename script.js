let p;
function setup() {
    p = new Player(100,100)
  createCanvas(window.innerWidth, window.innerHeight);
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
        this.maxSpeed = 10;
    }
    update(){
        p.draw()
        if(abs(p.v.vx) > p.maxSpeed){
            p.v.vx = Math.min(Math.max(p.v.vx, -p.maxSpeed), p.maxSpeed);
        }
        console.log(this.v.vx)
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
        circle(p.x,p.y,50)
    }
    keyPressed(){
         
    }
}
function draw() {
  background(220);
  p.update()
 
}
