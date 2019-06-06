'use-strict';

function onInit(){
    generateImages();
    saveObjectToLocal('images', gImgs);
    // renderGallery(gImgs);s

}

function renderGallery(imgs) {
    let gallery = document.querySelector('.main-gallery');
    let strHtml = ''
    imgs.forEach(image => {
        strHtml = `<div id=${image.id}><img src="${image.src}" alt="${image.name}"/></div>`
        gallery.innerHTML = strHtml;
    });
}