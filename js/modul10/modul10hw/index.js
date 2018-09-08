'use strict';

/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

const getBtn = document.querySelector('.js-get');
const getByIdBtn = document.querySelector('.js-getbyId');
const addBtn = document.querySelector('.js-add');
const removeBtn = document.querySelector('.js-remove');
const updateBtn = document.querySelector('.js-update');
const result = document.querySelector('.result');
const inputId = document.querySelector('.id');
const inputAddName = document.querySelector('.addName');
const inputAddAge = document.querySelector('.addAge');
const inputRemove = document.querySelector('.remove');
const inputUpdateName = document.querySelector('.update-name');
const inputUpdateId = document.querySelector('.update-id');
const form = document.querySelector('.get-id');
const addForm = document.querySelector('.add-user');
const removeForm = document.querySelector('.remove-user');
const updateForm = document.querySelector('.update-user');
const url = "https://test-users-api.herokuapp.com/users/";



getBtn.addEventListener('click', getAllUsers);
getByIdBtn.addEventListener('click',getUserById);
addBtn.addEventListener('click', addUser);
removeBtn.addEventListener('click', removeUser);
updateBtn.addEventListener('click', updateUser);


// ===============functions==========================

function updateUser(evt,id, user) {
evt.preventDefault();

id = inputUpdateId.value;
user = inputUpdateName.value;
const link = url+id;


fetch(link, {
    method: 'PUT',
    body: JSON.stringify({ name: user}),
    headers: {
        'Content-Type': 'application/json',
    }
  })
  .then(response => {
    if(response.ok) return response.json();
    throw new Error(`Error while fetching: ${response.statusText}`)
})
  .then(data => {
   console.log(data);
   
   if(user === '') return;
   if(id !== data.data.id) return;
   alert('name succesfully changed');
   
  })
  .catch(error => {
      
    console.log('ERROR' + error)
    
});


updateForm.reset();
}

function removeUser(evt,id) {
evt.preventDefault();

id = inputRemove.value;
console.log(id);

fetch(url+id, {
  method: 'DELETE'
}).then((data) => alert(`${id} deleted!`) )
.catch(error => console.log('ERROR' + error));


}

function addUser(evt,name, age) {
    evt.preventDefault();
     name = inputAddName.value;
     age = inputAddAge.value;
 
 fetch(url, {
  method: 'POST',
  body: JSON.stringify({ name: name, age: age}),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})
.then(response => {
    if(response.ok) return response.json();
    throw new Error(`Error while fetching: ${response.statusText}`)

})
  .then(data => {
   console.log(data);
   
   if(data.status !== 201) {
    alert('Input error!');
    
   }else {
    alert(`${name} successfully added`);
   
   };
   
  })
  .catch(error => {
      console.log('ERROR' + error);
    });

addForm.reset();
}



function getUserById(evt) {
    evt.preventDefault();
     const value = inputId.value;
   const link = url + value;
   
    fetch(link)
.then(response => {
    if(response.ok) return response.json();
    throw new Error(`Error while fetching: ${response.statusText}`)
})
.then(data => {
  console.log(data);
    const inputName = data.data.name;
    const inputId = data.data.id;
    const inputAge = data.data.age;

    const elem = createElem(inputId, inputName, inputAge);
    result.insertAdjacentHTML('beforeend', elem);
})
.catch(error => console.log(error));


 form.reset();
}


function getAllUsers(evt) {
evt.preventDefault();

fetch(url)
.then(response => {
    if(response.ok) return response.json();
    throw new Error(`Error while fetching: ${response.statusText}`)
})
.then(data => {
    data.data.forEach(res => {
        const inputName = res.name;
        const inputId = res.id;
        const inputAge = res.age;

        const elem = createElem(inputId, inputName, inputAge);
        result.insertAdjacentHTML('beforeend', elem);

    });

})
.catch(error => console.log(error));

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
