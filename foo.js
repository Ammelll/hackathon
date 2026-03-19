const print = console.log

let p;
let rectangles = [new Rectangle(0, 500, 1000, 100)];
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
        rect(r.x, r.y, r.w, r.h)
    }
}
