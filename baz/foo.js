const print = console.log

let p;
const width = window.innerWidth
const height = window.innerHeight
let levels = [];
let start;
let sprites = ['assets/rb.png', 'assets/steve.png'];
let sprite;

startup();

function startup() {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.appendChild(Object.assign(document.createElement('h2'), {innerHTML: 'Choose an avatar'}))
    for (const s of sprites) {
        const b = document.createElement('button');
        b.appendChild(Object.assign(document.createElement('img'), {src: s}));
        b.addEventListener('click', () => {
            sprite = s;
            div.remove();
            document.getElementById('main').style = '';
            stup();
        });
        div.appendChild(document.createElement('br'));
        div.appendChild(b)
    }
}

function preload() {
    grassImage = loadImage('/assets/grass.png');
    stoneImage = loadImage('/assets/stone.png');
    dirtImage = loadImage('/assets/dirt.png');
    concreteBallImage = loadImage('/assets/concrete.png');
    noLoop();
}

function stup () {
    start = Date.now();
    sprite = loadImage(sprite);
    levels = [
        [new Rectangle(grassImage, width * 11 / 12, height / 2, width / 6), new Rectangle(grassImage, width * 6 / 5, height / 2, width * 1 / 3), new Rectangle(stoneImage, width * 13 / 10, height / 2 - 100, 60, 100), new Flag(width * 3 / 2, height / 2 - 100)],
        [new Rectangle(grassImage, width * 11 / 12, height / 2, width / 6), new Rectangle(grassImage, width * 14 / 12, height / 2, width / 6), new Triangle(dirtImage, width * 29 / 24, height / 2, width * 29 / 24, height / 2 - height / 12, width * 31 / 24, height / 2), new Rectangle(grassImage, width * 33 / 24, height / 2, width / 4), new Wrecking_Ball(concreteBallImage, width * 71 / 48, height / 2 - height / 8, height / 7, 60), new Rectangle(grassImage, width * 42 / 24, height / 2, width / 6), new Rectangle(stoneImage, width * 51 / 24, height / 2, width / 6, 20, width / 6, 0), new Rectangle(grassImage, width * 60 / 24, height / 2, width / 6), new Flag(width * 63 / 24, height / 2 - 100)],
        [new Rectangle(grassImage, width * 11 / 12, height / 2, width / 6), new Rectangle(grassImage, width * 6 / 5, height / 2, width / 3), new Spikes(width * 13 / 10, height / 2, 300, 10), new Rectangle(stoneImage, width * 8 / 5, height / 2 - 100, width / 6, 20, 0, 200), new Rectangle(grassImage, width * 6 / 5, height / 8, width / 3), new Spikes(width * 13 / 10, height / 8, 300, 10), new Rectangle(stoneImage, width, -100, width / 6, 20, 0, 200), new Rectangle(grassImage, width * 6 / 5, -height / 3, width / 2), new Spikes(width * 13 / 10, -height / 3, 300, 10), new Flag(width * 8 / 5, -height / 3 - 100)],
        [],
    ];
    start = Date.now();
    p = new Player(window.innerWidth / 2, window.innerHeight / 2 - 300, sprite);
    createCanvas(window.innerWidth, window.innerHeight);
    loop();
}

function draw() {
    try {
    background(220);
    p.update()
    drawRectangles();
    drawText();
    } catch (e) {console.log(e)}
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