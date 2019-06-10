'use-strict';

function saveObjectToLocal(name, object) {
    object = JSON.stringify(object);
    localStorage.setItem(name, object);
}

function getObjectFromLocal(objectName) {
    return JSON.parse(localStorage.getItem(objectName));
}

function getImageById(array, id) {
    return array.find((object) => {
        return object.id === parseInt(id);
    })
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getNumOutOfString(string){
    return string.match(/\d+/g).map(Number)[0];
}

function openModal() {
    document.querySelector('.modal-window').style.opacity = 1;
    document.querySelector('.modal-window').style.pointerEvents = "auto";
}

function closeModal() {
    document.querySelector('.modal-window').style.opacity = 0;
    document.querySelector('.modal-window').style.pointerEvents = "none";
}

function sendMail(ev) {
    ev.preventDefault();
    let text = document.querySelector('.contact-me-text').value;
    let subject = document.querySelector('.contact-me-subject').value;
    let url = `https://mail.google.com/mail/?view=cm&fs=1&to=tomdorofey@gmail.com&cc=tammylimited@gmail.com&su=${subject}&body=${text}`
    window.open(url);
}