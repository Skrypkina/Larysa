'use strict';

/*
  Напишите скрипт для создания списка ul.
  
  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/

const list = document.querySelector('.list');
console.log(list);

do {
    const text = prompt('enter text');
    if(text === null) {
        break;
    }
  const item = document.createElement('li');
   item.textContent = text;
   list.appendChild(item);

} while(true)