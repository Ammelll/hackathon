const print = console.log

let p;
const width = window.innerWidth
const height = window.innerHeight
let rectangles = [new Rectangle(width*2/3,height/2,width/3)];
// setInterval(() => rectangles.filter(r => r.x + r.w >= 0), 2000);
// setInterval(() => rectangles.push(new Rectangle(1000)), 10000);

function preload() {
  img = loadImage('/assets/rb.png');
}
function setup() {
    p = new Player(window.innerWidth/2-300, window.innerHeight/2-300,img)
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
