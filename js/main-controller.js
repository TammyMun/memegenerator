'use-strict';

function onInit() {
    generateImages();
    clearSelectedImage();
    saveObjectToLocal('images', gImgs);
    let randomKeyWords = getRandomKeyWords(7);
    renderKeyWords(randomKeyWords);
    renderGallery(gImgs);
}

function goToGeneratorPage(id) {
    let selectedImage = getImageById(gImgs, id);
    saveObjectToLocal('selectedImage', selectedImage);
    window.location.href = 'editor.html';
}

function onFilter(filterWord){
    let images = filterImagesBy(filterWord);
    renderGallery(images);
}

function renderGallery(imgs) {
    let gallery = document.querySelector('.main-gallery');
    let strHtml = ''
    imgs.forEach((image, index) => {
        strHtml += `<div id=${image.id} onclick="goToGeneratorPage(this.id)"><img src="${image.src}" alt="${image.name}"/></div>`
        return strHtml;
    });
    gallery.innerHTML = strHtml;
}

function renderKeyWords(keywords){
    let elKeyWordsContainer = document.querySelector('.key-words-container');
    let strHtml = '';
    for(var i = 0; i < keywords.length; i++){
        strHtml += `<div class="${keywords[i].word}" onclick="onFilter(this.className)"
        style="font-size:${keywords[i].popularity * 5}px">
        ${keywords[i].word}</div>`
    }
    elKeyWordsContainer.innerHTML = strHtml;
}