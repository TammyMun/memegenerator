'use-strict';

function saveObjectToLocal(name, object) {
    if (localStorage.getItem(name)) return;
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