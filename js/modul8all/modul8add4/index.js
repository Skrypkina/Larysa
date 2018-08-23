'use strict';

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Send" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в абзац с классом .result
*/
const list = document.querySelector('.options');
const button = document.querySelector('.btn');
const result = document.querySelector('.result');

let res;



button.addEventListener('click', handleBtnClick);

function handleBtnClick() {
    event.preventDefault();

const radios = document.getElementsByName("option");

for (let i = 0, length = radios.length; i < length; i++)
{
 if (radios[i].checked)
 {
  // do whatever you want with the checked radio
//   console.log(radios[i].value);
 res = radios[i].value;
 result.textContent= `Result: ${res}`;
  // only one radio can be logically checked, don't check the rest
//   break;
 }
}
}
