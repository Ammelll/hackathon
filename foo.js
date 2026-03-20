const print = console.log

let p;
const width = window.innerWidth
const height = window.innerHeight
let levels = [];
// setInterval(() => rectangles.filter(r => r.x + r.w >= 0), 2000);
// setInterval(() => rectangles.push(new Rectangle(1000)), 10000);

function preload() {
    redBallImage = loadImage('/assets/rb.png');
    grassImage = loadImage('/assets/grass.png');
    stoneImage = loadImage('/assets/stone.png')
}
function setup() {
    levels = [
        [new Rectangle(grassImage, width * 11 / 12, height / 2, width / 6), new Rectangle(grassImage, width * 6 / 5, height / 2, width * 1 / 3), new Rectangle(stoneImage, width * 13 / 10, height / 2 - 100, 60, 100), new Flag(width * 3 / 2, height / 2 - 100)],
        [new Rectangle(grassImage, width * 11 / 12, height / 2, width / 6), new Rectangle(grassImage, width * 6 / 5, height / 2, width / 3), new Spikes(width * 13/10, height / 2, 300, 10), new Rectangle],
    ];
    p = new Player(window.innerWidth / 2, window.innerHeight / 2 - 300, redBallImage, levels)
    createCanvas(window.innerWidth, window.innerHeight);
}
function draw() {
    background(220);
    p.update()
    drawRectangles();
}
function drawRectangles() {
    for (let r of levels[p.level]) {
        r.move();
        r.draw(p)
    }
}
