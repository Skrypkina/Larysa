'use strict';

/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

const button = document.querySelector('.js-button-click');

   button.textContent = 0;
    let counter =0;


  const handleBtnClick = () => {

    if(event.type === 'click') {
        counter +=1;
    }

      button.textContent = counter;

    }
  
button.addEventListener('click', handleBtnClick);

