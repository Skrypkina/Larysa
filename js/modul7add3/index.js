'use strict';

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];


const list = document.querySelector('.list');

 const items = [];

 for(let i = 0; i < 5; i+= 1) {
     const item = document.createElement('li');
     items.push(item);
 }
 
 list.append(...items);

 list.children[0].insertAdjacentHTML('beforeend', elements[0]);
 list.children[1].insertAdjacentHTML('beforeend', elements[1]);
 list.children[2].insertAdjacentHTML('beforeend', elements[2]);
 list.children[3].insertAdjacentHTML('beforeend', elements[3]);
 list.children[4].insertAdjacentHTML('beforeend', elements[4]);





 console.log(list);   

 
