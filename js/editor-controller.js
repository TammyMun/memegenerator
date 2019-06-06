'use-strict';

let gCanvas;
let gCtx;
let gText = 'Edit your text here';
let gCurrentImage = getObjectFromLocal('selectedImage');

function onInit() {
    gCanvas = document.getElementById('canvas');
    gCtx = canvas.getContext('2d');
    gImgs = getObjectFromLocal('images');
    renderCanvas('../' + gCurrentImage.src);
}

function drawText() {
    gCtx.fillStyle = "white";
    gCtx.textBaseline = 'middle';
    gCtx.font = "50px 'Impact'";
    gCtx.fillText(gText, 50, 50);
    gCtx.strokeStyle = "black";
    gCtx.stroke();
}

function renderText(img) {
    document.getElementById('text-editor').addEventListener('keyup', function () {
        gCtx.clearRect(0, 0, canvas.width, canvas.height);
        console.log('test');
        gCtx.drawImage(img, 0, 0);
        drawText();
        gText = this.value;
        gCtx.fillText(gText, 50, 50);
    })
}



function DynamicText(img) {
    document.getElementById('name').addEventListener('keyup', function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        DrawOverlay(img);
        DrawText();
        text_title = this.value;
        ctx.fillText(text_title, 50, 50);
    });
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

