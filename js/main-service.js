'use-strict';

let gId = 100;
let gImgs;

function generateImages(){
    gImgs = [
        new image(gId++, 'confused', 'img/001.jpg', []),
        new image(gId++, 'cat on laptop', 'img/002.jpg', []),
        new image(gId++, 'come on', 'img/003.jpg', []),
        new image(gId++, 'morphius', 'img/014.jpg', [])
    ]
    return gImgs;
}

function image(id, name, src, thumbnail, keywords){
    this.id = id,
    this.name = name,
    this.src = src,
    this.thumbnail = thumbnail,
    this.keywords = keywords
}

