const print = console.log

let p;
let rectangles = [new Rectangle(1000, 0), new Rectangle(1000, window.innerWidth / 2)];
setInterval(() => rectangles.filter(r => r.x + r.w >= 0), 2000);
setInterval(() => rectangles.push(new Rectangle(1000)), 10000);

function preload() {
  img = loadImage('/assets/rb.png');
}
function setup() {
    p = new Player(100, 100,img)
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
        rect(r.x, r.y, r.w, r.h);
    }
}
