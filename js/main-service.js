'use-strict';

let gId = 100;
let gImgs;
let gFonts;
let gCurrentImage;

function generateImages() {
    gImgs = [
        new image(gId++, 'confused', 'img/001.jpg', []),
        new image(gId++, 'cat-on-laptop', 'img/002.jpg', []),
        new image(gId++, 'come-on', 'img/003.jpg', []),
        new image(gId++, 'kid-and-dog-sleeping', 'img/004.jpg', []),
        new image(gId++, 'evil-quoting', 'img/005.jpg', []),
        new image(gId++, 'evil-kid', 'img/006.jpg', []),
        new image(gId++, 'african-kids-dancing', 'img/007.jpg', []),
        new image(gId++, 'funny-face-trump', 'img/008.jpg', []),
        new image(gId++, 'suprised-kid', 'img/009.jpg', []),
        new image(gId++, 'streching-dog', 'img/010.jpg', []),
        new image(gId++, 'obama-laughing', 'img/011.jpg', []),
        new image(gId++, 'sports-kiss', 'img/012.jpg', []),
        new image(gId++, 'lechaim', 'img/013.jpg', []),
        new image(gId++, 'morphius', 'img/014.jpg', []),
        new image(gId++, 'mountain-lady', 'img/015.jpg', []),
        new image(gId++, 'lord-of-the-rings', 'img/016.jpg', []),
        new image(gId++, 'opra', 'img/017.jpg', []),
        new image(gId++, 'star-trek', 'img/018.jpg', []),
        new image(gId++, 'tell-me-more', 'img/019.jpg', []),
        new image(gId++, 'putin', 'img/020.jpg', [])
    ]
    return gImgs;
}

function clearSelectedImage() {
    localStorage.setItem('selectedImage', '');
}

function image(id, name, src, thumbnail, keywords) {
    this.id = id,
    this.name = name,
    this.src = src,
    this.keywords = keywords,
    this.thumbnail = thumbnail,
    this.design = {}
}

function updateColor() {
    let currColor = document.getElementById('color-picked').value;
    gCurrentImage.design.color = currColor;
}

function changeFont() {

}

function resize() {
    let currSize = document.getElementById('size').value + 'px';
    gCurrentImage.design.size = currSize;
}

function deleteText() {
    document.getElementById('text-editor').value = '';
}