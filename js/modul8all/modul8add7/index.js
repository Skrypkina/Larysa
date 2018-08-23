'use strict';

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  Если введено подходящее количество, то outline инпута становится зеленым, 
  если неправильное - красным. 
*/

const inputs = document.querySelector('.inputs');
const input = inputs.querySelector('input');
const inputarr=document.querySelectorAll('input');



for(let i = 0; i < inputarr.length; i+= 1) {
    inputarr[i].addEventListener('mouseout', handleInput);
    function handleInput() {
   
        if(inputarr[i].value.length <= inputarr[i].dataset.length) {
            inputarr[i].style.borderColor='green';

       } else {
        inputarr[i].style.borderColor='red';
         
        }


    }


}


