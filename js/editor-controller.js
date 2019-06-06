'use-strict';

let gCanvas;
let gCtx;
let gText = 'Write your meme';
 

function onInit() {
    gCanvas = document.getElementById('canvas');
    gCtx = canvas.getContext('2d');
    gImgs = getObjectFromLocal('images');
    gCurrentImage = getObjectFromLocal('selectedImage');
    renderCanvas('../' + gCurrentImage.src);
}

function drawText() {
    gCtx.fillStyle = "white";
    gCtx.textBaseline = 'middle';
    gCtx.font = "50px 'Impact'";
    gCtx.fillText(gText, 50, 50);
    gCtx.strokeStyle = 'black';
    gCtx.lineWidth = 2;
    gCtx.strokeText(gText, 50, 50);
}

function renderText(img) {
    document.getElementById('text-editor').addEventListener('keyup', function () {
        gCtx.clearRect(0, 0, canvas.width, canvas.height);
        console.log('test');
        gCtx.drawImage(img, 0, 0);
        drawText();
        gText = this.value;
        gCtx.fillText(gText, 50, 50);
        gCtx.strokeStyle = 'black';
        gCtx.lineWidth = 2;
        gCtx.strokeText(gText, 50, 50);
    })
}

function downloadImg(elLink) {
    var imgContent = canvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}

function renderCanvas(imgSrc) {
    img = new Image();
    img.src = imgSrc;
    gCanvas.width = img.width;
    gCanvas.height = img.height;
    img.onload = function () {
        gCtx.drawImage(img, 0, 0);
        drawText();
        renderText(img);
    }
}

