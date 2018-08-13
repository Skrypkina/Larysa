'use strict';

/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];

  const allPosts = document.querySelector('.comon-posts');

  const values = createCards(posts);
  
  allPosts.append(...values);


  function createPostCard({img, title, text, link}) {

    const image = document.createElement('img');
    image.classList.add('post__image');
    image.src = img;
    image.alt = 'post image';
    
    const header = document.createElement('h2');
    header.classList.add('post__title');
    header.textContent = title;
    
    const paragraph = document.createElement('p');
    paragraph.classList.add('post__text');
    paragraph.textContent = text;
    
    
    const button = document.createElement('a');
    button.classList.add('button');
    button.href = link;
    button.textContent = 'Read more';
    
    const post = document.querySelector('.post'); 

    post.append(image, header, paragraph, button);
    
    return post;
    
    }
    
    
  function  createCards(array) {
//         const values = [];
//     array.forEach(arr => {
//       const el = createPostCard(arr);
//       values.push(el);
     
//   });
//          return values;
     
   return array.reduce((acc, arr) => 
   acc.concat(createPostCard(arr))
   ,[]);

    }
 
    