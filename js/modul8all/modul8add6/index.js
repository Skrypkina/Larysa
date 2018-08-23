'use strict';

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Используйте делегирование.
*/

const list = document.querySelector('.list');


list.addEventListener('click', handleBtnClick);

function handleBtnClick() {
    const nodeName = event.target.nodeName;
    if(nodeName === 'BUTTON') {
    const parent = event.target.parentNode;
    parent.remove();
    }
}