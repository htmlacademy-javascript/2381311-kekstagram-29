import { createPhoto } from './data.js';
import { renderPictures } from './thumbnail.js';

import {} from './fullSizePhoto.js';

// Создаем массив с данными фотографий
const photoss = Array.from({ length: 25 }, createPhoto);

// Отрисовываем миниатюры фотографий
renderPictures(photoss);
