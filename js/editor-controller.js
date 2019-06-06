'use-strict';

let gCanvas;
let gCtx;
let gText;

function drawText() {
    gCtx.fillStyle = "white";
    gCtx.textBaseline = 'middle';
    gCtx.font = "50px 'Impact'";
    gCtx.fillText(gText, 50, 50);
    gCtx.stroke();
}

function renderText() {
    document.getElementById('text-editor').addEventListener('keyup', function () {
        gText = this.value;
        drawText();
        gCtx.fillText(gText, 50, 50);
    })
}

function onInit() {
    gCanvas = document.getElementById('canvas');
    gCtx = canvas.getContext('2d');
    renderCanvas(gImgs[0].url);
    drawText();
    renderText();
}


function renderCanvas(imgSrc) {
    img = new Image();
    img.src = imgSrc;
    gCanvas.width = img.width;
    gCanvas.height = img.height;
    img.onload = function () {
        gCtx.drawImage(img, 0, 0);
    }
}

