'use-strict';

let gCanvas;
let gCtx;
let gText = 'Write your meme';
let gIsMouseClicked = false;
let imgEl;



function onInit() {
    gCanvas = document.getElementById('canvas');
    gCtx = canvas.getContext('2d');
    gImgs = getObjectFromLocal('images');
    gCurrentImage = getObjectFromLocal('selectedImage');
    imgEl = renderCanvas('../' + gCurrentImage.src);
    let textEditor = document.getElementById('text-editor')
    textEditor.addEventListener('keyup', ()=>{
        renderText(imgEl, x=50, y=50, textEditor);
    })
}

function drawText() { // might let go
    gCtx.fillStyle = gCurrentImage.design.color;
    gCtx.textBaseline = 'middle';
    gCtx.font = "50px 'Impact'";
    gCtx.fillText(gText, 50, 50);
    gCtx.strokeStyle = 'black';
    gCtx.lineWidth = 2;
    gCtx.strokeText(gText, 50, 50);
}

function renderText(img, x = 50, y = 50, element) {
        gCtx.clearRect(0, 0, canvas.width, canvas.height);
        gCtx.drawImage(img, 0, 0);
        gCtx.fillStyle = gCurrentImage.design.color;
        gCtx.textBaseline = 'middle';
        gCtx.font = "50px 'Impact'";
        gText = element.value;
        gCtx.fillText(gText, x, y);
        gCtx.strokeStyle = 'black';
        gCtx.lineWidth = 2;
        gCtx.strokeText(gText, x, y);
}

function onStartDraw() {
    gIsMouseClicked = true;
}

function onStopDraw() {
    gIsMouseClicked = false;
}

function draw(ev) {
    if (gIsMouseClicked) {
        // gCtx.save()
        const { offsetX, offsetY } = ev
        renderText(imgEl, offsetX, offsetY, document.getElementById('text-editor'))
    }
    else return
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
    }
    return img;
}

function onChangeColor() {
    updateColor();
    renderCanvas('../' + gCurrentImage.src);
}

function onDeleteText() {
    deleteText();
    renderCanvas('../' + gCurrentImage.src);
}

function onResize() {
    resize()
    // render
}

function onChangeFont() {
    changeFont()
    // render
}