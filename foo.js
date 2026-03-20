const print = console.log

let p;
const width = window.innerWidth
const height = window.innerHeight
let rectangles = [new Rectangle(width*11/12,height/2,width/6), new Rectangle(width*6/5,height/2,width*1/3),new Rectangle(width*13/10,height/2-100,60,100)];

// setInterval(() => rectangles.filter(r => r.x + r.w >= 0), 2000);
// setInterval(() => rectangles.push(new Rectangle(1000)), 10000);

function preload() {
  img = loadImage('/assets/rb.png');
}
function setup() {
    p = new Player(window.innerWidth/2, window.innerHeight/2-300,img)
    createCanvas(window.innerWidth, window.innerHeight);
}
function draw() {
    background(220);
    p.update()
    drawRectangles();
}
function drawRectangles() {
    for (let r of rectangles) {
        r.move();
        r.draw(p)
    }
}
