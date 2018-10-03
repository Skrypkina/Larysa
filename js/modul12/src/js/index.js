'use strict';

/* 
  Напишите приложение для хранения url веб-страниц в виде карточек-закладок. 
  
  Реализуйте следующий функционал:
    - Используйте Gulp для сборки проекта, JS обработан транспайлером Babel, ресурсы оптимизированы
    
    - Для добавления новой закладки, в приложении есть форма с элементом input и кнопкой "Добавить"
    
    - В приложении есть список всех добавленных карточек-закладок, располагающийся под формой
    
    - Некоторые элементы интерфейса создаются динамически. Используйте шаблонизатор Handlebars для
      создания списка карточек. Форма уже есть в HTML при загрузке страницы.
      
    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходят проверки:
        * на существование закладки с такой ссылкой в текущей коллекции закладок. Если такая закладка есть,
          всплывает диалоговое окно оповещающее пользователя о том, что такая закладка уже есть.
        * при условии валидной, еще не существующей в коллекции ссылки, карточка с такой ссылкой
          добавляется в коллекцию.
          
    - В интерфейсе, новые карточки добавляются наверх списка, а не вниз.
    
    - Каждая карточка-закладка содержит кнопку для удаления карточки из коллекции, при клике 
      на кнопку происходит удаление.
      
    - При повторном посещении страницы с одного и того же устройства и браузера, пользователь видит
      все карточки-закладки которые были во время последнего его посещения. Используйте localStorage
      
  🔔 Оформление интерфейса произвольное
*/




const editor = document.querySelector('.js-editor');
const input = editor.querySelector('input');
const noteList = document.querySelector('.note-list');
const sourсe = document.querySelector('#list').innerHTML.trim();


editor.addEventListener('submit', handleSubmit);
noteList.addEventListener('click', handleDelete);


function createElem(text, elem) {

    const template = Handlebars.compile(elem);
   // const template = MyApp.templates.common.list();
    const markup = template(text);

    return noteList.insertAdjacentHTML('afterbegin', markup);
}



function handleSubmit (evt)

{
    evt.preventDefault();

    //read input value
    const value = input.value;

    if (value === '') return;
    
    // add if local storage is empty or value does not exist there

   if ((localStorage.getItem(value)===null) || ((localStorage.length===0)))

 
    {  
        //add item to local storage
        localStorage.setItem(value,value);


        //add item to page

        const link = {
            linkText: value,
        }
        createElem(link, sourсe);

        //clear input field
        this.reset();

     }


     //otherwise show message that value already exists
        else
        alert('This link is in the list');
}





function updatePageByLocalStorageData()

{
    let Key;
    for(let i=0, len=localStorage.length; i<len; i++) {
        Key = localStorage.key(i);
        // console.log(Key);

        const link = {
            linkText: Key,
        }
        createElem(link, sourсe);

    }

}

function handleDelete(evt)
{
    
    evt.preventDefault();

    //remove from local storage
    
   const  delKey = evt.target.parentNode.firstChild.textContent;
    localStorage.removeItem(delKey);

    //remove from page
    const nodeName = evt.target.nodeName;
    if(nodeName === 'BUTTON'){
    const parent = evt.target.parentNode;
    parent.remove();
}


}

updatePageByLocalStorageData();





