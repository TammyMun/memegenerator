'use-strict';

function onInit() {
    generateImages();
    clearSelectedImage();
    saveObjectToLocal('images', gImgs);
    let randomKeyWords = getRandomKeyWords(7);
    renderKeyWords(randomKeyWords);
    renderGallery(gImgs);
    renderListInput(gImgs);
}

function navigateToGenerator(id) {
    let selectedImage = getImageById(gImgs, id);
    saveObjectToLocal('selectedImage', selectedImage);
    window.location.href = 'editor.html';
}

function renderListInput(images){
    let elInputList = document.querySelector('.images-search-list');
    let strHtml = '';
    images.forEach((image)=>{
        strHtml += `<option value="${image.name}">`
        image.keywords.forEach((keyword)=>{
            strHtml += `<option value="${keyword}">`
        })
    })
    elInputList.innerHTML = strHtml;
}

function onFilter(filterWord){
    if(!filterWord){
        renderGallery(gImgs);
        return;
    } else{
        let images = filterImagesBy(filterWord);
        renderGallery(images);
        return;
    }
}

function renderGallery(imgs) {
    let gallery = document.querySelector('.main-gallery');
    let strHtml = ''
    imgs.forEach((image) => {
        strHtml += `<div id=${image.id} onclick="navigateToGenerator(this.id)"><img src="${image.src}" alt="${image.name}"/></div>`
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