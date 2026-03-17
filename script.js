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
    }
    draw(){
        circle(p.x,p.y,50)
    }
    keyPressed(key,keyCode){
         if (keyIsDown(37)) {
            p.x -= 1;
        }
        if (keyIsDown(39)) {
            p.x += 1;
        }
        if (keyIsDown(38)) {
            p.y -= 1;
        }
        if (keyIsDown(40)) {
            p.y += 1;
        }
    }
}
function draw() {
  background(220);
  p.update()
 
}
