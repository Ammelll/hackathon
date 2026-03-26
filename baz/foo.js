const print = console.log

let p;
const width = window.innerWidth
const height = window.innerHeight
let levels;
let start = 0;
let pauseTime = null;
let sprites = ['assets/rb.png', 'assets/steve.png', 'assets/steven.jpg', 'assets/alby.png'];
let skyImage;
let defaultSprite;
let sprite;
let scalex = width / 1920
let scaley = height / 1080
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
    defaultSprite = loadImage('assets/steve.png');
    grassImage = loadImage('assets/grass.png');
    stoneImage = loadImage('assets/stone.png');
    dirtImage = loadImage('assets/dirt.png');
    concreteBallImage = loadImage('assets/concrete.png');
    questionMarkImage = loadImage('assets/questionmark.png');
    skyImage = loadImage('assets/sky.png');

}

function stup () {
    start = Date.now();
    sprite = loadImage(sprite);
    p.sprite = sprite;
    start = Date.now();
    document.getElementById('baz').play();
}

function setup() {
    loadLevels();
    p = new Player(window.innerWidth / 2, window.innerHeight / 2 - 300, defaultSprite);
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(220);
    image(skyImage, 0, 0, window.innerWidth, window.innerHeight);
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
