'use strict';

/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в консоль выводит строку "Input is in focus!"
    - При наборе текста в текстовое поле (событие input), текущее его значение должно 
      отображаться в абзаце с классом input-value 
*/

const input = document.querySelector('.input');
const text = document.querySelector('.input-value');
console.log(text);

input.addEventListener('click', handleInputFocus);

function handleInputFocus() {
    console.log('Input is in focus!');
    text.textContent = input.value;

}