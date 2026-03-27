function loadLevels() {
    levels = [
        [
            new Rectangle(grassImage, width * 11 / 12, height / 2, width / 6), 
            // new Checkpoint(width * 13 / 12, height / 2 - 75),
            new Rectangle(grassImage, width * 6 / 5, height / 2, width * 1 / 3), 
            new Rectangle(stoneImage, width * 13 / 10, height / 2 - 100, 60, 100), 
            new Flag(width * 3 / 2, height / 2 - 100)
        ],
        [
            new Rectangle(grassImage, width * 11 / 12, height / 2, width / 6), 
            new Rectangle(grassImage, width * 14 / 12, height / 2, width / 6), 
            new Triangle(dirtImage, width * 29 / 24, height / 2, width * 29 / 24, height / 2 - height / 12, width * 31 / 24, height / 2),
            new Rectangle(stoneImage, width * 31 / 24, height / 2 - height/12+10, 1, height / 12),

            new Rectangle(grassImage, width * 33 / 24, height / 2, width / 4), 
            new Wrecking_Ball(concreteBallImage, width * 71 / 48, height / 2 - height / 11, height / 7, 60), 
            new Rectangle(grassImage, width * 42 / 24, height / 2, width / 6), 
            new Rectangle(stoneImage, width * 51 / 24, height / 2, width / 6, 20, width / 6, 0), 
            new Rectangle(grassImage, width * 60 / 24, height / 2, width / 6), 
            new Flag(width * 63 / 24, height / 2 - 100)
        ],
        [
            new Rectangle(grassImage, width * 11 / 12, height / 2, width / 6), 
            new Rectangle(grassImage, width * 6 / 5, height / 2, width / 3), 
            new Spikes(width * 51 / 40, height / 2, width/5, 10), 
            new Rectangle(stoneImage, width * 8 / 5, height / 2 - 100, width / 6, 20, 0, 200), 
            new Rectangle(grassImage, width * 6 / 5, height / 8, width / 3), 
            new Spikes(width * 51 / 40, height / 8, width/5, 10), 
            new Rectangle(stoneImage, width, -100, width / 6, 20, 0, 200),
            new Rectangle(grassImage, width * 6 / 5, -height / 3, width / 2), 
            new Spikes(width * 51 / 40, -height / 3, width/5, 10), 
            new Flag(width * 8 / 5, -height / 3 - 100)],
        [
            new Rectangle(grassImage, width * 11 / 12, height / 2,width,height/12), 
            new Crusher(width*11/12 + width/6,0,width*1/8,height/7,height/2-height/7,-2),
            new Crusher(width*11/12 + width*1/3,0,width*1/8,height/7,height/2-height/7,-4),
            new Crusher(width*11/12 + width*3/6,0,width*1/8,height/7,height/2-height/7,-6),
            new Rectangle(grassImage,width * 11/12 + width, height/2 - height/12, height/12,height/12 + height/12),
            new Rectangle(grassImage,width * 11/12 + width + 1*height/12, height/2 - 2*height/12, height/12,height/12 + 2*height/12),
            new Rectangle(grassImage,width * 11/12 + width + 2*height/12, height/2 - 3*height/12, height/12,height/12+3*height/12),
            new Rectangle(grassImage,width * 11/12 + width + 3*height/12, height/2 - 4*height/12, height/12,height/12+4*height/12),
            new Rectangle(grassImage,width * 11/12 + width * 4*height/12, height/2 - 5*height/12, height/12,height/12+5*height/12),
            new Rectangle(grassImage,width * 11/12 + width * 5*height/12, height/2 - 6*height/12, width/6,height/12+6*height/12),
            new Rectangle(questionMarkImage,width * 22/10, height/12,width/6,60,0,0,500),
            new Rectangle(grassImage, width * 25/10, height /12,width/6), 
            new Flag(width*51/20,height/12-100)
        ],
        [
            new Rectangle(grassImage, width * 11 / 12, height / 2,width/6,height/12), 
        ]
    ];
}