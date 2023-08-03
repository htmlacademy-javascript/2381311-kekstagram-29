import './data.js';

// Функция для создания DOM-элемента на основе шаблона
function createPictureElement(photo) {
  const pictureTemplate = document.querySelector('#picture').content;
  const pictureElement = pictureTemplate.cloneNode(true);

  const imgElement = pictureElement.querySelector('.picture__img');
  imgElement.src = photo.url;
  imgElement.alt = photo.description;

  const commentsElement = pictureElement.querySelector('.picture__comments');
  commentsElement.textContent = photo.comments.length;

  const likesElement = pictureElement.querySelector('.picture__likes');
  likesElement.textContent = photo.likes;

  return pictureElement;
}

// Функция для отрисовки миниатюр фотографий
function renderPictures(photos) {
  const fragment = document.createDocumentFragment();
  const picturesContainer = document.querySelector('.pictures');

  photos.forEach((photo) => {
    const pictureElement = createPictureElement(photo);
    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
}

export { renderPictures };
