'use strict';

// Ознакомьтесь с HTML и CSS.
  
// Есть меню навигации, необходимо написать скрипт, который
// при клике на пункт меню добавит ему класс menu-link-active,
// таким образом выделив текущую (активную) ссылку,
// при этом убрав его у всех остальных элементов меню.

// Пункотв меню может быть произвольное количество, используйте
// прием "Делегирование событий". Учтите клик по самому ul, его
// необходимо игнорировать.

// При клике по ссылкам не должна перезагружаться страница!
// */

const menu = document.querySelector('.js-menu');


menu.addEventListener('click', handleMenuClick);


function handleMenuClick() {
   event.preventDefault();
   const links = document.querySelectorAll('.menu-link');
  links.forEach(element => {
      if (element.classList.contains('menu-link-active'))
      {
        element.classList.remove('menu-link-active');
      }
      
  });

   event.target.classList.add('menu-link-active');
  
  
}