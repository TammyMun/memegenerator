'use-strict';

function onInit() {
    generateImages();
    clearSelectedImage();
    saveObjectToLocal('images', gImgs);
    renderGallery(gImgs);
}

function goToGenerator(id) {
    let selectedImage = getImageById(gImgs, id);
    saveObjectToLocal('selectedImage', selectedImage);
    window.location.href = 'editor.html';
}

function renderGallery(imgs) {
    let gallery = document.querySelector('.main-gallery');
    let strHtml = ''
    imgs.forEach((image, index) => {
        strHtml += `<div id=${image.id} onclick="goToGenerator(this.id)"><img src="${image.src}" alt="${image.name}"/></div>`
        return strHtml;
    });
    gallery.innerHTML = strHtml;
}