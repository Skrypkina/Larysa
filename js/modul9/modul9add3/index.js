'use strict';

/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 1.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");

const timer = {
  startTime: null,
  deltaTime: null,
  isActive: false,
  id: null,

  start() {
  if(this.isActive) return;
  
this.isActive = true;
this.startTime = Date.now();    
this.id = setInterval(() => {
const currentTime = Date.now();   
this.deltaTime = currentTime - this.startTime;
 updateClockface(clockface, this.deltaTime);

}, 100)
  },

  stop() {
 clearInterval(this.id);
 this.isActive = false;
 this.deltaTime = 0;
  updateClockface(clockface, this.deltaTime);

}
}



startBtn.addEventListener('click', timer.start.bind(timer));
stopBtn.addEventListener('click', timer.stop.bind(timer));

/*
* Вспомогательные функции
*/

/*
* Обновляет поле счетчика новым значением при вызове
* аргумент time это кол-во миллисекунд
*/
function updateClockface(elem, time) {
  // Используйте функцию getFormattedTime из задания #1
  // elem.textContent = getFormattedTime(time);
  elem.textContent = getFormattedTime(time);
}

function getFormattedTime(time) {
 
    const date = new Date(time);
    const min = date.getMinutes();
    const formatedMin = min < 10?`0${min}`: min;
    const sec = date.getSeconds();
    const formatedSec = sec < 10?`0${sec}`: sec;
    const ms = String(date.getMilliseconds()).slice(0, 1);

    return `${formatedMin}:${formatedSec}:${ms}`;
  }
/*
* Подсветка активной кнопки
*/
function setActiveBtn(target) {
  if(target.classList.contains('active')) {
    return;
  }
  
  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');
  
  target.classList.add('active');
}
