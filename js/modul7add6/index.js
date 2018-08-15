'use strict';

/*
  Создайте функцию createPostCard(), которая 
  создает и возвращает DOM-узел карточки поста.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

// <!-- <img class="post__image" src="http://via.placeholder.com/400x150" alt="post image">
//         <h2 class="post__title">Lorem ipsum dolor</h2>
//         <p class="post__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!</p>
      
//         <a class="button" href="#">Read more</a> -->

const newPost = createPostCard();

console.log(newPost);

function createElem(el, classList) {
  const elem = document.createElement(el);
  elem.classList.add(classList);
  return elem;
  }

function createImage(el, classList) {
const image = createElem('img', 'post_image');
image.src = 'http://via.placeholder.com/400x150';
image.alt = 'post image';

return image;
}


function createHeader(el, classList) {
const header = createElem('header', 'post_title');
header.textContent = 'Lorem ipsum dolor';

  return header;
}


function createParagraph(el, classList) {
  const paragraph = createElem('p', 'post__text');
  paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';
  
   return paragraph;
}


function createButton(el, classList) {
  const button = createElem('a', 'button');;
  button.href = '#';
  button.textContent = 'Read more';
   
    return button;
}



function createPostCard() {
  
 const image = createImage();

const header = createHeader();

const paragraph = createParagraph();

const button = createButton();


const post = document.querySelector('.post');


post.append(image, header, paragraph, button);

return post;

}


