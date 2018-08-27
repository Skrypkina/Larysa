'use strict';

/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/



function getFormattedTime(time) {
 

    const date = new Date(time);
    const min = date.getMinutes();
    const formatedMin = min < 10?`0${min}`: min;
    const sec = date.getSeconds();
    const formatedSec = sec < 10?`0${sec}`: sec;
    const ms = String(date.getMilliseconds()).slice(0, 1);

    return `${formatedMin}:${formatedSec}:${ms}`;
  }
  
  console.log(
    getFormattedTime(1523621052858)
  ); // 04:12.8
  
  console.log(
    getFormattedTime(1523621161159)
  ); // 06:01.1
  
  console.log(
    getFormattedTime(1523621244239)
  ); // 07:24.2
   
 
  
   