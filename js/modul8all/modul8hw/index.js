'use strict';

/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
    { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
    // { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
    // { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
  ];
  
  const preview = document.querySelector('.preview');
  const fullView = document.querySelector('.fullview');
  
    const galary = createGalery(galleryItems);
  
    preview.append(...galary);
    
    createfullViewItem(galleryItems[0]);
  
    preview.addEventListener('click', handleImgClick);
    

// functions

    function handleImgClick() {
 

        fullView.firstElementChild.src = event.target.dataset.fullview;

        const images = document.getElementsByClassName("img");
    
        Array.from(images).forEach(element => {
           if (element.classList.contains('active'))
            {
              element.classList.remove('active');
            }
            
        });

       event.target.classList.add('active');
    }



    function createElem({fullview, alt}) {
        const img = document.createElement('img');
        img.setAttribute('alt', alt);
        img.setAttribute('src',fullview);
    
        return img;
    }



  function createfullViewItem({fullview, alt}) {
      const bigimage = createElem({fullview, alt});
      
      fullView.appendChild(bigimage);
      
      return fullView;
  }
 
 

  function createItem({preview, fullview, alt}) {
    const image = createElem({fullview, alt});
    image.src = preview;
    image.setAttribute('data-fullview',fullview);
    image.classList.add('img'); 

    const listItem = document.createElement('li');
      listItem.appendChild(image);
 
    return listItem;
  }


  function createGalery(array) {
     return array.map(arr => createItem(arr));
  }


  
  