import { isEscapeKey } from './util.js';
import { getPhotos } from './gallery.js';

const bigPictureModalElement = document.querySelector('.big-picture');
const pictureModalOpenElements = Array.from(document.querySelectorAll('.picture'));
const pictureCloseButton = document.querySelector('#picture-cancel');


const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefaul();
    closePictureEvt();
  }
};

const OnCloseButtonClick = () => {
  closePictureEvt();
};

const openPictureEvt = () => {
  pictureCloseButton.classList.remove('hidden');

  bigPictureModalElement.querySelector('.social__comment-count').classList.add('hidden');
  bigPictureModalElement.querySelector('.comments-loader').classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  pictureCloseButton.addEventListener('click', OnCloseButtonClick);
};

const closePictureEvt = () => {
  pictureCloseButton.classList.add('hidden');

  document.querySelector('body').classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  pictureCloseButton.removeEventListener('click', OnCloseButtonClick);
};


const commentsList = bigPictureModalElement .querySelector('.social__comments');

const renderComments = (index) => {
  const template = bigPictureModalElement.querySelector('ul').querySelector('.social__comment').cloneNode(true);
  const comments = getPhotos[index].comments;
  const fragment = document.createDocumentFragment();

  while (commentsList.firstChild) {
    commentsList.removeChild(commentsList.firstChild);
  }
  comments.forEach((comment) => {
    const commentTemplate = template.cloneNode(true);
    commentTemplate.querySelector('img').src = comment.avatar;
    commentTemplate.querySelector('img').alt = comment.name;
    commentTemplate.querySelector('p').textContent = comment.text;
    fragment.appendChild(fragment);
  });

  commentsList.appendChild(fragment);
};

const renderFullSizePicture = (picture, index) => {
  bigPictureModalElement.querySelector('.big-picture__img').querySelector('.img').src = picture.querySelector('.picture__img').src;
  bigPictureModalElement.querySelector('.big-picture__social').querySelector('.span').textContent = picture.querySelector('.picture__likes').textContent;
  bigPictureModalElement.querySelector('.social__comment-count').querySelector('.span').textContent = picture.querySelector('.picture__img').alt;
  renderComments(index);
  bigPictureModalElement.querySelector('.social__caption').textContent = picture.querySelector('.picture__likes').textContent;
};

pictureModalOpenElements.forEach((pictureModalOpenElement, index) => {
  pictureModalOpenElement.addEventListener('click', () => {
    renderFullSizePicture(pictureModalOpenElement, index);

    openPictureEvt();
  });
});

