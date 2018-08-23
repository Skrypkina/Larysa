'use strict';

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа стоящие в инпутах и запишите их сумму в абзац.
*/

const button = document.querySelector('.js-count');
const firstInput = document.querySelector('.js-first-input');
const secondInput = document.querySelector('.js-second-input');
const res = document.querySelector('.result');
res.textContent = 0;

let firstNum=0;
let secondNum=0;
let sum;

const getInputValue = () => {

firstNum = firstInput.value;
//  console.log(firstNum);
};

firstInput.addEventListener('mouseout', getInputValue);


const getInputValueNext = () => {
    secondNum = secondInput.value;
    // console.log(secondNum);
    };
secondInput.addEventListener('mouseout', getInputValueNext);

const addInputs = () => {
   sum = Number(firstNum) + Number(secondNum);
   res.textContent=sum;
//   console.log(sum);

   
}

button.addEventListener('click', addInputs);