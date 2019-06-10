'use-strict';

let gId = 100;
let gImgs;
let gCurrentImage;
let gCurrentText = { index: 0, x: 50, y: 50 };
let gTextLines = [{ text: 'Write your meme' }];

//if not in use delete to avoid unnecessary variables
let gFonts;

function generateImages() {
    gImgs = [
        new image(gId++, 'confused', 'img/001.jpg', ['listen', 'funny hair']),
        new image(gId++, 'cat-on-laptop', 'img/002.jpg', ['cats', 'sleep', 'computer', 'animals', 'cute']),
        new image(gId++, 'come-on', 'img/003.jpg', ['come on', 'yelling', 'angry']),
        new image(gId++, 'kid-and-dog-sleeping', 'img/004.jpg', ['animals', 'baby', 'kids', 'dogs', 'cute', 'sleep']),
        new image(gId++, 'evil-quoting', 'img/005.jpg', ['evil', 'quote', 'bold']),
        new image(gId++, 'evil-kid', 'img/006.jpg', ['kids', 'evil', 'laugh']),
        new image(gId++, 'african-kids-dancing', 'img/007.jpg', ['african', 'kids', 'dance']),
        new image(gId++, 'funny-face-trump', 'img/008.jpg', ['trump', 'president']),
        new image(gId++, 'suprised-kid', 'img/009.jpg', ['kids', 'cute']),
        new image(gId++, 'streching-dog', 'img/010.jpg', ['animals', 'dogs', 'cute', 'strech']),
        new image(gId++, 'obama-laughing', 'img/011.jpg', ['obama', 'president']),
        new image(gId++, 'sports-kiss', 'img/012.jpg', ['sports']),
        new image(gId++, 'lechaim', 'img/013.jpg', ['leonardo dicaprio', 'cheers', 'actor', 'television']),
        new image(gId++, 'morphius', 'img/014.jpg', ['matrix', 'morphius', 'sunglasses', 'actor']),
        new image(gId++, 'mountain-lady', 'img/015.jpg', ['painting', 'mountains', 'dress', 'lady']),
        new image(gId++, 'lord-of-the-rings', 'img/016.jpg', ['lord of the rings', 'one cannot simply']),
        new image(gId++, 'opra', 'img/017.jpg', ['actor', 'television', 'opra']),
        new image(gId++, 'star-trek', 'img/018.jpg', ['actor', 'star trek', 'television', 'laugh']),
        new image(gId++, 'tell-me-more', 'img/019.jpg', ['tell me']),
        new image(gId++, 'putin', 'img/020.jpg', ['putin', 'president']),
        new image(gId++, 'success kid', 'img/021.jpg', ['kids', 'cute', 'beach']),
        new image(gId++, 'trump', 'img/022.jpg', ['trump', 'president']),
        new image(gId++, 'two dogs', 'img/023.jpg', ['dogs', 'cute']),
        new image(gId++, 'what would you do', 'img/024.jpg', ['old man', 'funny'])
    ]
    return gImgs;
}

function clearSelectedImage() {
    localStorage.setItem('selectedImage', '');
}

function getRandomKeyWords(numberOfWords) {
    let randomKeywords = [];
    for (var i = 0; i < numberOfWords; i++) {
        let imagesIndex = Math.floor(Math.random() * gImgs.length);
        let keyword = {
            word: gImgs[imagesIndex].keywords[Math.floor(Math.random() * gImgs[imagesIndex].keywords.length)],
            popularity: getRandomInteger(1, 10)
        };
        let checkForWord = randomKeywords.find((word) => {
            return word.word === keyword.word;
        })
        //making sure words dont repeat
        if (checkForWord) i--;
        else randomKeywords.push(keyword);
    }
    return randomKeywords;
}

function filterImagesBy(filterWord) {
    let filtered = gImgs.filter((image) => {
        return image.keywords.indexOf(filterWord) > -1;
    })
    return filtered;
}

function image(id, name, src, keywords, thumbnail) {
    this.id = id,
    this.name = name,
    this.src = src,
    this.keywords = keywords,
    this.thumbnail = thumbnail
}

function updateColor(color, index) {
    gTextLines[index].color = color;
}

function changeFont() {

}

function updateFontSize(value, index) {
    let currSize = value + 'px';
    gTextLines[index].fontSize = currSize;
}

function deleteLine() {
    document.getElementById('text-editor-1').value = '';
}