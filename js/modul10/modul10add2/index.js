'use strict';

/*
  Написать функцию fetchUserData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

const input = document.querySelector("input");
const submitBtn = document.querySelector("#js-submit");
const result = document.querySelector(".result");
const apiUrl = "https://api.github.com/users/";

submitBtn.addEventListener("click", fetchUserData);

/*
  @param {FormEvent} evt
*/
function fetchUserData(evt) {
evt.preventDefault();

const name = input.value;
const link = apiUrl + name;


fetch(link)
.then(response => {
    if(response.ok) return response.json();

    throw new Error(`Error while fetching: ${response.statusText}`);
  })
  .then(data => {
   const inputAvatar = data.avatar_url;
   const inputUsername = data.login;
   const inputBio = data.bio;
   const inputRepos = data.public_repos;
     
   const elem = createElem(inputAvatar, inputUsername, inputBio,inputRepos);
   result.insertAdjacentHTML('beforeend', elem);


  })
  .catch(error => {
    console.log(error);
  });

}

function createElem(avatar, userName, bio, repos) {

    return `
    <img src=${avatar} class="img" alt= ""></br>
    Username: ${userName}</br>
    Bio: ${bio}</br>
    Public repos: ${repos}
  
    `
}