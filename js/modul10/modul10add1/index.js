'use strict';

/*
  Написать функцию fetchCountryData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому 
  адресу. Обязательно обработать вариант с ошибкой запроса
  используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

const input = document.querySelector("input");
const submitBtn = document.querySelector(".js-submit");
const result = document.querySelector(".js-result");
const apiUrl = "https://restcountries.eu/rest/v2/name/";

submitBtn.addEventListener("click", fetchCountryData);

/*
  @param {FormEvent} evt
*/
function fetchCountryData(evt) {
  evt.preventDefault();


  const country = input.value;
  const path = apiUrl + country;
  fetch(path)
    .then(response => {
      if (response.ok) return response.json();

      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data => {
      const inputCountry = data[0].name;
      const inputCapital = data[0].capital;
      const inputCurrency = data[0].currencies[0].name;
      const inputFlag = data[0].flag;

      const elem = createElem(inputCountry, inputCapital, inputCurrency, inputFlag);
      result.insertAdjacentHTML('beforeend', elem);
    })
    .catch(error => {
      console.log('fetch error');
    });


}



function createElem(countryName, countryCapital, currencies, flag) {

  return `
    Country: ${countryName}</br>
    Capital: ${countryCapital}</br>
    Currency: ${currencies}</br>
    Flag: <img src=${flag} alt="flag" class="img">
`
}