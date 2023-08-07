import { getPhotos } from './gallery.js';
import { openPictureEvt, closePictureEvt } from './openAndClosePicture.js';
import { template, renderThumbnails } from './thumbnail.js';

export const bigPictureModalElement = document.querySelector('.big-picture');
export const pictureModalOpenElements = Array.from(document.querySelectorAll('.picture'));


const commentsList = bigPictureModalElement .querySelector('.social__comments');

const clearCommentsList = () => {
  if (commentsList.children) {
    while (commentsList.firstChild) {
      commentsList.removeChild(commentsList.firstChild);
    }
  }
};

const renderCommentsList = (index) => {
  const comments = getPhotos[index].comments;
  const fragment = document.createDocumentFragment();

  clearCommentsList();

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
  renderCommentsList(index);
  bigPictureModalElement.querySelector('.social__caption').textContent = picture.querySelector('.picture__likes').textContent;
};

pictureModalOpenElements.forEach((pictureModalOpenElement, index) => {
  pictureModalOpenElement.addEventListener('click', () => {
    renderFullSizePicture(pictureModalOpenElement, index);

    openPictureEvt();
  });
});

