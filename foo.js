const print = console.log

let p;
const width = window.innerWidth
const height = window.innerHeight
let rectangles = [];

// setInterval(() => rectangles.filter(r => r.x + r.w >= 0), 2000);
// setInterval(() => rectangles.push(new Rectangle(1000)), 10000);

function preload() {
  redBallImage = loadImage('/assets/rb.png');
  grassImage = loadImage('/assets/grass.png');
  stoneImage = loadImage('/assets/stone.png')
}
function setup() {
    rectangles = [new Rectangle(grassImage,width*11/12,height/2,width/6), new Rectangle(grassImage,width*6/5,height/2,width*1/3),new Rectangle(stoneImage,width*13/10,height/2-100,60,100), new Flag(width*3/2,height/2-100)];
    p = new Player(window.innerWidth/2, window.innerHeight/2-300,redBallImage)
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
