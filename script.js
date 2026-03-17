let p;
function setup() {
    p = new Player(100,100)
  createCanvas(window.innerWidth, window.innerHeight);
}
class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    update(){
        p.draw()
        if (keyIsDown(37)) {
            p.x -= 5;
        }
        if (keyIsDown(39)) {
            p.x += 5;
        }
        if (keyIsDown(38)) {
            p.y -= 5;
        }
        if (keyIsDown(40)) {
            p.y += 5;
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
