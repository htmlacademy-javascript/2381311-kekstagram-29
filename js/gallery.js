//модуль для отрисовки галереи

import { createPhoto } from './data.js';
import { renderThumbnails } from './thumbnail.js';

// Создаем массив с данными фотографий
const getPhotos = Array.from({ length: 25 }, createPhoto);

// Отрисовываем миниатюры фотографий
renderThumbnails(getPhotos());

export { getPhotos };
