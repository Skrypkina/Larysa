'use strict';

/*
  Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
  нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное 
  значение из массива. 

  При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
*/

const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');
const body = document.querySelector('body');
let timerId = null;

startBtn.addEventListener('click', () => {

 timerId = setInterval(() => {

    let  randomItem = colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor = randomItem;

 }, 1000);

});

stopBtn.addEventListener('click', () => {

    clearInterval(timerId);
});
