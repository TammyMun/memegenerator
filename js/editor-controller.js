'use-strict';
let textEditor = document.getElementById('text-editor-1');
let gCanvas;
let gCtx;
let gIsMouseClicked = false;
let imgEl;

function onInit() {
    gCanvas = document.getElementById('canvas');
    canvas.width = '100%';
    canvas.height = 'auto';
    gCtx = canvas.getContext('2d');
    gImgs = getObjectFromLocal('images');
    gCurrentImage = getObjectFromLocal('selectedImage');

    imgEl = renderCanvas(gCurrentImage.src);
    updateFontSize(40, 0);
    updateColor('#ffffff', 0);
}

function renderText(img, element, x = 50, y = 50, textIndex) {
    gCtx.clearRect(0, 0, canvas.width, canvas.height);
    gCtx.drawImage(img, 0, 0);
    gCtx.fillStyle = gTextLines[textIndex].color;
    gCtx.textBaseline = 'middle';
    gCtx.font = `${gTextLines[textIndex].fontSize} 'Impact'`;
    gTextLines[textIndex].text = element.value;
    gCtx.fillText(gTextLines[textIndex].text, x, y);
    gCtx.strokeStyle = 'black';
    gCtx.lineWidth = 2;
    gCtx.strokeText(gTextLines[textIndex].text, x, y);
}

function onStartDraw() {
    gIsMouseClicked = true;
}

function onStopDraw() {
    gIsMouseClicked = false;
}

function draw(ev) {
    if (gIsMouseClicked) {
        
        if(ev.touches){
            ev.offsetX = ev.touches[0].pageX - ev.touches[0].target.offsetLeft;
            ev.offsetY = ev.touches[0].pageY - ev.touches[0].target.offsetTop;
        }
        
        let offsetX = ev.offsetX
        let offsetY = ev.offsetY

        gCurrentText.x = offsetX;
        gCurrentText.y = offsetY;
        renderText(imgEl, textEditor, offsetX, offsetY, gCurrentText.index);
    }
    else return
}

function downloadImg(elLink) {
    var imgContent = canvas.toDataURL('image/jpeg');
    elLink.href = imgContent;
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

function addInput(elementId) {
    //extract number from id string
    let id = getNumOutOfString(elementId);
    id++
    let controlsContainer = document.querySelector('.lines-container');
    gTextLines.push({});
    strHtml = controlsContainer.innerHTML;
    strHtml += `
    <div class="controls" id="${id}">
        <div class="text-input-container">
            <label class="label">Edit your text here</label>
            <input class="editor" id="text-editor-${id}" type="text" value="" onfocus="changeListener(this.id)"/>
        </div>
        <input onchange="onChangeColor(this.value, this.className)" class="color-picker-${id}" type="color" id="color-picked-${id}" value="#ffffff">
        <button onclick="onDeleteText()" class="btn">Delete</button>
        <label for="font-size">Font size</label>
        <input onchange="onResize(this.value, this.id)" type="range" id="font-size-${id}" name="size" min="20" max="100" value="40"step="2">
        <button class="btn"></button>
        <button class="add-line-btn" id="line-${id}" onclick="addInput(this.id)">Add line</button>
    </div>`
    controlsContainer.innerHTML = strHtml;
}

function changeListener(elementId) {
    let id = getNumOutOfString(elementId);
    textEditor = document.querySelector('#text-editor-' + id);
    gCurrentText.index = --id;
    renderText(imgEl, textEditor, x = 50, y = 50, gCurrentText.index);
    textEditor.addEventListener('keyup', () => {
        renderText(imgEl, textEditor, x = 50, y = 50, gCurrentText.index);
    })
}

function onChangeColor(color, className) {
    let indexToChange = getNumOutOfString(className) - 1;
    updateColor(color, indexToChange);
    renderText(imgEl, textEditor, gCurrentText.x, gCurrentText.y, indexToChange);
}

function onDeleteline() {
    deleteLine();
    renderCanvas(gCurrentImage.src);
}

function onResize(value, id) {
    let index = getNumOutOfString(id) - 1;
    updateFontSize(value, index);
    renderText(imgEl, textEditor, gCurrentText.x, gCurrentText.y, index);
}

function onChangeFont() {
    // changeFont()
    // render
}