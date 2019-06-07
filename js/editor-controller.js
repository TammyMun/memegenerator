'use-strict';
let textEditor = document.getElementById('text-editor-1');
let gCanvas;
let gCtx;
let gTextLines = {1:'Write your meme'}
let gIsMouseClicked = false;
let imgEl;

function onInit() {
    gCanvas = document.getElementById('canvas');
    gCtx = canvas.getContext('2d');
    gImgs = getObjectFromLocal('images');
    gCurrentImage = getObjectFromLocal('selectedImage');

    imgEl = renderCanvas(gCurrentImage.src);
    updateColor();
    updateFontSize();
    updateColor();
}

// will need to add gTexts[i] to renderText
function renderText(img, element, x = 50, y = 50, textKey) {
    gCtx.clearRect(0, 0, canvas.width, canvas.height);
    gCtx.drawImage(img, 0, 0);
    gCtx.fillStyle = gCurrentImage.design.color;
    gCtx.textBaseline = 'middle';
    gCtx.font = `${gCurrentImage.design.size} 'Impact'`;
    gTextLines[textKey] = element.value;
    gCtx.fillText(gTextLines[textKey], x, y);
    gCtx.strokeStyle = 'black';
    gCtx.lineWidth = 2;
    gCtx.strokeText(gTextLines[textKey], x, y);
}

function onStartDraw() {
    gIsMouseClicked = true;
}

function onStopDraw() {
    gIsMouseClicked = false;
}

function draw(ev) {
    if (gIsMouseClicked) {
        const { offsetX, offsetY } = ev
        renderText(imgEl, textEditor, offsetX, offsetY)
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
    strHtml = controlsContainer.innerHTML;
    strHtml += `
    <div class="controls" id="${id}">
        <div class="text-input-container">
            <label class="label">Edit your text here</label>
            <input class="editor" id="text-editor-${id}" type="text" value="" onfocus="changeListener(this.id)"/>
        </div>
        <input onchange="onChangeColor()" type="color" id="color-picked-${id}" value="#ffffff">
        <button onclick="onDeleteText()" class="btn">Delete</button>
        <label for="font-size">Font size</label>
        <input onchange="onResize()" type="range" id="font-size-${id}" name="size" min="20" max="100" value="40"step="2">
        <button class="btn"></button>
        <button class="add-line-btn" id="line-${id}" onclick="addInput(this.id)">Add line</button>
    </div>`
    controlsContainer.innerHTML = strHtml;
}

function changeListener(elementId){
    let id = getNumOutOfString(elementId);
    textEditor = document.querySelector('#text-editor-' + id);
    renderText(imgEl, textEditor, x = 50, y = 50, id);
    textEditor.addEventListener('keyup', () => {
        renderText(imgEl, textEditor, x = 50, y = 50, id);
    })
}

function onChangeColor() {
    updateColor();
    renderText(imgEl, textEditor);
}

function onDeleteText() {
    deleteText();
    renderCanvas('../' + gCurrentImage.src);
}

function onResize() {
    updateFontSize();
    renderText(imgEl, textEditor);
}

function onChangeFont() {
    // changeFont()
    // render
}