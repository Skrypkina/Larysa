'use strict';

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];


const list = document.querySelector('.list');

 const items = [];

 for(let i = 0; i < elements.length; i+= 1) {
     const item = document.createElement('li');
     items.push(item);
 }
 
 list.append(...items);

for (let j=0; j<elements.length; j+=1){
  list.children[j].insertAdjacentHTML('beforeend', elements[j]);
}

 console.log(list);   

 
