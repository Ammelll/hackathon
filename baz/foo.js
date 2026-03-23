const print = console.log

let p;
const width = window.innerWidth
const height = window.innerHeight
let levels;
let start;
let pauseTime = null;
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
    noLoop();
    grassImage = loadImage('/assets/grass.png');
    stoneImage = loadImage('/assets/stone.png');
    dirtImage = loadImage('/assets/dirt.png');
    concreteBallImage = loadImage('/assets/concrete.png');
}

function stup () {
    start = Date.now();
    sprite = loadImage(sprite);
    loadLevels();
    start = Date.now();
    p = new Player(window.innerWidth / 2, window.innerHeight / 2 - 300, sprite);
    createCanvas(window.innerWidth, window.innerHeight);
    loop();
}

function draw() {
    background(220);
    p.update()
    drawRectangles();
    drawText();
}

function keyPressed(keyEvent) {
    if (keyEvent.key === 'p')
        pauseTime === null ? (
            noLoop(),
            pauseTime = Date.now()
        ) : (
            start += Date.now() - pauseTime,
            pauseTime = null,
            loop()
        );
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