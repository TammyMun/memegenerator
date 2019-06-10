'use-strict';
let textEditor = document.getElementById('text-editor-1');
let gCanvas;
let gCtx;
let gIsMouseClicked = false;
let imgEl;

function onInit() {
    gCanvas = document.getElementById('canvas');
    gCtx = canvas.getContext('2d');
    gImgs = getObjectFromLocal('images');
    gCurrentImage = getObjectFromLocal('selectedImage');

    imgEl = renderCanvas(gCurrentImage.src);
    updateFontSize(40, 0);
    updateColor('#ffffff', 0);
}

function renderText(img, element, textIndex) {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    gTextLines[textIndex].text = element.value;
    gCtx.strokeStyle = 'black';
    gCtx.lineWidth = 2;

    gTextLines.forEach((text) => {
        if (text.text) {
            //CHECK IF TEXT HAS POSITION IF NOT SET DEFAULT
            if (!text.x && !text.y) {
                text.x = 50
                text.y = 50
            }
            gCtx.font = `${text.fontSize} 'impact'`;
            gCtx.fillStyle = text.color;
            gCtx.fillText(text.text, text.x, text.y);
            gCtx.strokeText(text.text, text.x, text.y);
        }
    })
}

function onStartDraw() {
    gIsMouseClicked = true;
}

function onStopDraw() {
    gIsMouseClicked = false;
}

function draw(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    if (gIsMouseClicked) {

        if (ev.touches) {
            ev.offsetX = ev.touches[0].pageX - ev.touches[0].target.offsetLeft;
            ev.offsetY = ev.touches[0].pageY - ev.touches[0].target.offsetTop;
        }

        let offsetX = ev.offsetX
        let offsetY = ev.offsetY

        gTextLines[gCurrentText.index].x = offsetX
        gTextLines[gCurrentText.index].y = offsetY
        renderText(imgEl, textEditor, gCurrentText.index);
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

    if (window.innerWidth > 980) {
        gCanvas.width = 980;
        gCanvas.height = 600;
    } else {
        gCanvas.width = window.innerWidth - 10;
        gCanvas.height = window.innerHeight / 2;
    }

    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    }
    return img;
}

function addInput(elementId) {
    //extract number from id string
    let id = getNumOutOfString(elementId);
    id++;
    let controlsContainer = document.querySelector('.lines-container');
    gTextLines.push({});
    strHtml = controlsContainer.innerHTML;
    strHtml += `
    <div class="controls" id="${id}">
        <div class="text-input-container">
            <label class="label">Edit your text here</label>
            <input class="text-editor" id="text-editor-${id}" type="text" value="" onfocus="changeListener(this.id)"/>
        </div>
        <label class="color-picker">Color</label>
        <input onchange="onChangeColor(this.value, this.className)" class="color-picker-${id}" type="color" id="color-picked-${id}" value="#ffffff">
        <label for="font-size">Font size</label>
        <input onchange="onResize(this.value, this.id)" type="range" id="font-size-${id}" name="size" min="20" max="100" value="40"step="2">
        <button class="btn add-line-btn" id="line-${id}" onclick="addInput(this.id)">+</button>
        <button onclick="onDeleteLine(this.id)" class="btn" id="controls-${id}">🗑</button>
    </div>`
    controlsContainer.innerHTML = strHtml;
}

function changeListener(elementId) {
    let id = getNumOutOfString(elementId);
    textEditor = document.querySelector('#text-editor-' + id);
    gCurrentText.index = --id;
    renderText(imgEl, textEditor, gCurrentText.index);
    textEditor.addEventListener('keyup', () => {
        renderText(imgEl, textEditor, gCurrentText.index);
    })
}

function onChangeColor(color, className) {
    let indexToChange = getNumOutOfString(className) - 1;
    updateColor(color, indexToChange);
    renderText(imgEl, textEditor, indexToChange);
}

function onDeleteLine(elId) {
    let id = getNumOutOfString(elId);
    let currTextEditor = document.querySelector('#text-editor-' + id);
    currTextEditor.value = '';
    // let index = getNumOutOfString(id) - 1;
    // renderText(gCurrentImage.src, currTextEditor, index);
    let currLine = document.getElementById(`${id}`);
    currLine.innerHTML = '';
    // might need render indexes func in service
}

function onResize(value, id) {
    let index = getNumOutOfString(id) - 1;
    updateFontSize(value, index);
    renderText(imgEl, textEditor, index);
}

function onChangeFont() {
    // changeFont()
    // render
}
