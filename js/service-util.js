'use-strict';

function saveObjectToLocal(name, object){
    object = JSON.stringify(object);
    localStorage.setItem(name, object);
}

function getObjectFromLocal(objectName){
    return JSON.parse(localStorage.getItem(objectName));
}