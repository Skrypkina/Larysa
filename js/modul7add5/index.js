'use strict';

/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию getInputsData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

const checked = document.querySelectorAll('input[checked]');
 

function getInputsData(array) {
    let valueArray = [];
    array.forEach(arr => valueArray.push(arr.value));
    return valueArray;
}
const value = getInputsData(checked);

console.log(value);
