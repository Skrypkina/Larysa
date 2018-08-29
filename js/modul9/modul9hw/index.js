'use strict';

/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.js-time');
const btnStart = document.querySelector('.js-start');
const btnLap = document.querySelector('.js-take-lap');
const btnReset = document.querySelector('.js-reset');
const jsLaps = document.querySelector('.js-laps');


const timer = {
  startTime: null,
  deltaTime: null,
  isActive: false,
  id: null,
  pauseTime: null,

  start() {

    if (this.isActive) return;

    this.isActive = true;
    this.startTime = Date.now() - this.pauseTime;

    this.id = setInterval(() => {
      const currentTime = Date.now();
      this.deltaTime = currentTime - this.startTime;
      updateClockface(time, this.deltaTime);
      btnReset.disabled = false;
      btnReset.style.background = '#808080';
    }, 100)
  },

  stop() {
    clearInterval(this.id);
    this.isActive = false;
  },

  reset() {
    timer.stop();
    this.deltaTime = 0;
    this.pauseTime = 0;
    updateClockface(time, this.deltaTime);
  },
}


btnStart.addEventListener('click', handleStartBtnClick);
btnReset.addEventListener('click', handleResetBtnClick);
btnLap.addEventListener('click', handleLapBtnClick);


//=========Functions===============================

function handleLapBtnClick() {
  const snap = timer.deltaTime;
  const formatedTime = getFormattedTime(snap);
  const listItem = createElem(formatedTime);
  jsLaps.insertAdjacentHTML('beforeend', listItem);
  const array = Array.from(jsLaps.children);
  const lapArr = array.reduce((acc, arr) => acc.concat(arr.textContent),[]);
  console.log(lapArr);
}


function createElem(elem) {
return `<li class = "item">
 <p>lap time is ${elem}</p>
</li>`;
}

function handleStartBtnClick() {
  if (!timer.isActive) {
    timer.start();
    btnStart.textContent = 'Pause';
  } else {
    timer.stop();
    timer.pauseTime = timer.deltaTime;
    btnStart.textContent = 'Continue';

  }

}


function handleResetBtnClick() {
  timer.reset();
  btnReset.disabled = true;
  btnReset.style.background = '#D3D3D3';
  btnStart.textContent = 'Start';
}

function updateClockface(elem, time) {
  elem.textContent = getFormattedTime(time);
}

function getFormattedTime(time) {

  const date = new Date(time);
  const min = date.getMinutes();
  const formatedMin = min < 10 ? `0${min}` : min;
  const sec = date.getSeconds();
  const formatedSec = sec < 10 ? `0${sec}` : sec;
  const ms = String(date.getMilliseconds()).slice(0, 1);

  return `${formatedMin}:${formatedSec}:${ms}`;
}