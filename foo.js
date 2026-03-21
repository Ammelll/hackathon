const print = console.log

let p;
const width = window.innerWidth
const height = window.innerHeight
let levels = [];
const start = Date.now();

// setInterval(() => rectangles.filter(r => r.x + r.w >= 0), 2000);
// setInterval(() => rectangles.push(new Rectangle(1000)), 10000);

function preload() {
    redBallImage = loadImage('/assets/rb.png');
    grassImage = loadImage('/assets/grass.png');
    stoneImage = loadImage('/assets/stone.png');
    dirtImage = loadImage('/assets/dirt.png');
    concreteBallImage = loadImage('/assets/concrete.png')
}
function setup() {
    levels = [
        [new Rectangle(grassImage, width * 11 / 12, height / 2, width / 6), new Rectangle(grassImage, width * 6 / 5, height / 2, width * 1 / 3), new Rectangle(stoneImage, width * 13 / 10, height / 2 - 100, 60, 100), new Flag(width * 3 / 2, height / 2 - 100)],
        [new Rectangle(grassImage, width * 11 / 12, height / 2, width / 6),new Rectangle(grassImage, width * 14 / 12, height / 2, width / 6), new Triangle(dirtImage, width * 29/24, height/2, width * 29/24,height/2 - height/12, width * 31/24, height/2), new Rectangle(grassImage, width * 33 /24, height / 2, width / 4), new Wrecking_Ball(concreteBallImage,width * 71/48, height /2 - height / 8, height / 7, 60),new Rectangle(grassImage, width * 42/24, height / 2, width / 6),new Rectangle(stoneImage, width*51/24, height / 2, width / 6,20,width/6,0),new Rectangle(grassImage, width * 60/24, height / 2, width / 6),new Flag(width*63/24,height/2 -100)],
        [new Rectangle(grassImage, width * 11 / 12, height / 2, width / 6), new Rectangle(grassImage, width * 6 / 5, height / 2, width / 3), new Spikes(width * 13/10, height / 2, 300, 10), new Rectangle(stoneImage, width * 8/5, height/2 - 100 , width/6, 20,0,200),new Rectangle(grassImage, width * 6 / 5, height / 8, width / 3),new Spikes(width * 13/10, height/8, 300, 10), new Rectangle(stoneImage, width, -100 , width/6, 20,0,200),new Rectangle(grassImage, width * 6 / 5, -height / 3, width / 2), new Spikes(width * 13/10, -height / 3, 300, 10),new Flag(width*8/5,-height / 3 -100)],
        [],

    ];
    p = new Player(window.innerWidth / 2, window.innerHeight / 2 - 300, redBallImage, levels)
    createCanvas(window.innerWidth, window.innerHeight);
}
function draw() {
    background(220);
    p.update()
    drawRectangles();
    drawText();
}

function drawText() {
    const t = Date.now() - start;
    fill('black');
    textSize(25);
    text(Math.floor(t / 1000) + '.' + Math.floor((t % 1000) / 10), 10, 25);
}

function drawRectangles() {
    for (let r of levels[p.level]) {
        r.move();
        r.draw(p);
    }
}
