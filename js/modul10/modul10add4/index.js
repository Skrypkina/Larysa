'use strict';

/*
  Документация API: https://github.com/trostinsky/users-api#users-api

  Просмотр всех записей: https://test-users-api.herokuapp.com/users/ 

  Написать функцию getUserByName, которая используя REST сервис 
  по адресу https://test-users-api.herokuapp.com/users/
  посылает запрос с name введенным в input.
 
  Результатом fetch будет ответ от сервера, 
  вывести содержимое всего ответа (id, name, age) 
  или 'Такого пользователя в списке нет!'.
*/

const input = document.querySelector("input");
const postBtn = document.querySelector(".js-post");
const result = document.querySelector(".result");
const form = document.querySelector('.search-form');
const url = "https://test-users-api.herokuapp.com/users/";


postBtn.addEventListener("click", getUserByName);

function getUserByName(evt) {
  evt.preventDefault();
  const value = input.value;
  let resNameFound=false;

  fetch(url)
  .then(response => {
      if(response.ok) return response.json();
      throw new Error(`Error while fetching: ${response.statusText}`);
      
  })
  .then(data => {
    data.data.forEach(res => {

        const inputName = res.name;
        const inputId = res.id;
        const inputAge = res.age;
        
            if(res.name === value) {
            resNameFound=true;
            const elem = createElem(inputId, inputName, inputAge);
            result.insertAdjacentHTML('beforeend', elem);
            
            } 
          
    });

    if (resNameFound===false)
    {
        result.textContent = 'Такого пользователя в списке нет!';
    }

  })
  .catch(error => {
      console.log(error);
  });
  form.reset();
}

function createElem(id, name, age) {
    return `
    <table>
    <thead>
    <tr>
      <th>ID</th>
      <th>NAME</th> 
      <th>AGE</th>
    </tr>
    </thead>
    <tr>
      <td>${id}</td>
      <td>${name}</td>
      <td>${age}</td>
    </tr>
    `
    
    }