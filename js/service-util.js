'use-strict';

function saveObjectToLocal(name, object){
    if(localStorage.getItem(name)) return;
    object = JSON.stringify(object);
    localStorage.setItem(name, object);
}

function getObjectFromLocal(objectName){
    return JSON.parse(localStorage.getItem(objectName));
}