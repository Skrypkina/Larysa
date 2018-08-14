'use strict';

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/      

const root = document.querySelector('div');

const result = createBoxes(5);
console.log(result);
root.append(...result);


function createBoxes(num) {

    const values = [];
   let dimensionPlus=0;
  for(let i = 0; i < num; i += 1) {
    const res = createDiv(dimensionPlus);
    dimensionPlus+=10;
    values.push(res);
  } 
    return values; 
}


function createDiv(dimensionPlus) {

    const div = document.createElement('div');
 
  
   let dimNum = 30+dimensionPlus;
   
   div.style.width = dimNum+"px";
   div.style.height = dimNum+"px";
   div.style.background = random_bg_color();

    // function random_bg_color() {
    //     const x = Math.floor(Math.random() * 256);
    //     const y = Math.floor(Math.random() * 256);
    //     const z = Math.floor(Math.random() * 256);
    //     const bgColor = "rgb(" + x + "," + y + "," + z + ")";
    
    //     div.style.background = bgColor;
    //     }

    //     random_bg_color();

    return div;
}

   function random_bg_color() {
        const x = Math.floor(Math.random() * 256);
        const y = Math.floor(Math.random() * 256);
        const z = Math.floor(Math.random() * 256);
        const bgColor = "rgb(" + x + "," + y + "," + z + ")";
    
        return bgColor;
        }

       
