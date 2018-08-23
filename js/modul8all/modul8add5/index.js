'use strict';

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Используйте делегирование.
*/

const images = document.querySelector('.images');

images.addEventListener('click', handleBtnClick);

function handleBtnClick() {
    alert(event.target.src);
}