//модуль для отрисовки миниатюр

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailsList = document.querySelector('.pictures');

// Функция для создания DOM-элемента на основе шаблона
const createThumbnail = ({ url, description, likes, comments }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

  return thumbnail;
};

// Функция для отрисовки миниатюр фотографий
const renderThumbnails = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => fragment.appendChild(createThumbnail(photo)));
  thumbnailsList.appendChild(fragment);
};

export { renderThumbnails };
