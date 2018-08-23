'use strict';

/*
  Дан спан и кнопки +1, -1, которые будут увеличивать 
  и уменьшать на 1 значение спана. Сделайте так, чтобы 
  это значение не могло стать меньше нуля.
*/
const btnSub = document.querySelector('.js-sub');
const btnAdd = document.querySelector('.js-add');
const value = document.querySelector('.js-value');

let counter = 0;

btnAdd.addEventListener('click', addNumber);
btnSub.addEventListener('click', deductNumber);

function addNumber() {
 if(event.type === 'click') {
     counter += 1;
    value.textContent = counter;
 }
}

function deductNumber() {
    if(value.textContent <= 0) return;
    if(event.type === 'click') {
        counter -= 1;
       value.textContent = counter;
}
}    