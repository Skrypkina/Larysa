'use strict';

/*
  Документация API: https://github.com/trostinsky/users-api#users-api

  Просмотр всех записей: https://test-users-api.herokuapp.com/users/ 

  Написать функцию fetchUsers, которая используя REST сервис 
  по адресу https://test-users-api.herokuapp.com/users/
  посылает get запрос и получает ответ.
  
  Результатом fetch будет массив объектов с полями.
  
  В элемент result поместить таблицу состоящую из 2-х
  столбцов след формата, где кол-во строк будет такое как
  и кол-во объектов пользователей в ответе:
  
    ID | NAME | AGE
    id | name | age  
    id | name | age  
*/

const getBtn = document.querySelector(".js-get");
const result = document.querySelector(".result");

getBtn.addEventListener("click", fetchUsers);

/*
  @param {FormEvent} evt
*/
function fetchUsers(evt) {
  evt.preventDefault();

  fetch("https://test-users-api.herokuapp.com/users/")
  .then(response => {
   if(response.ok) return response.json()
   throw new Error(`Error while fetching: ${response.statusText}`);
  })
  .then(data => {

    data.data.forEach(item => {
     const receivedId = item.id;
     const receivedName = item.name;
     const receivedAge = item.age;

     const elem = createElem(receivedId, receivedName, receivedAge);
     result.insertAdjacentHTML('beforeend', elem);

    });
  })
  .catch(error => {
   console.log(error);
  });
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
