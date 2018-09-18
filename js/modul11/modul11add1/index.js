'use strict';

/*
  К pen уже подключен Handlebars.
  
  Создайте шаблон списка указаного во вкладке HTML.
  
  Отрендерите список в DOM по данным из массива listItems.
*/

const listItems = [
    { name: 'item 1', count: 2 },
    { name: 'item 2', count: 4 },
    { name: 'item 3', count: 12 },
    { name: 'item 4', count: 29 },
  ];


  const source = document.querySelector('#menu').innerHTML.trim();
  const noteList = document.querySelector('.note-list');
  const template = Handlebars.compile(source); 
  const markup = listItems.reduce((acc, item) => acc+ template(item),'');
  noteList.insertAdjacentHTML('afterbegin', markup);


