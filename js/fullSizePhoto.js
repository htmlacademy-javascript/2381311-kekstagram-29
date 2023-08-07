import { getPhotos } from './gallery.js';
import { template } from './thumbnail.js';

const bigPictureModalElement = document.querySelector('.big-picture');
const pictureModalOpenElements = Array.from(document.querySelectorAll('.picture'));


const commentsList = bigPictureModalElement .querySelector('.social__comments');

const clearCommentsList = () => {
  if (commentsList.children) {
    while (commentsList.firstChild) {
      commentsList.removeChild(commentsList.firstChild);
    }
  }
};

const renderCommentsList = (photoIndex, commentsCount, targetCommentsCount) => {
  const comments = getPhotos[photoIndex].comments;
  const fragment = document.createDocumentFragment();

  comments.forEach((comment, index) => {
    for (let i = targetCommentsCount; i < commentsCount; i++) {
      if (index === i) {
        const commentTemplate = template.cloneNode(true);
        commentTemplate.querySelector('img').src = comment.avatar;
        commentTemplate.querySelector('img').alt = comment.name;
        commentTemplate.querySelector('p').textContent = index + comment.message;
        fragment.appendChild(commentTemplate);
      }
    }
  });
  commentsList.appendChild(fragment);
  bigPictureModalElement.querySelector('.social__comment-count').firstChild.textContent = `${commentsList.children.length} из `;
};

const commentsLoader = document.querySelector('.comments-loader');

const onCommentsLoaderClick = (renderComments) => {
  renderComments();
};


const renderFullSizePicture = (picture, index) => {
  let commentsCount = 5;
  bigPictureModalElement.querySelector('.big-picture__img').querySelector('.img').src = picture.querySelector('.picture__img').src;
  bigPictureModalElement.querySelector('.big-picture__social').querySelector('.span').textContent = picture.querySelector('.picture__likes').textContent;
  bigPictureModalElement.querySelector('.social__comment-count').querySelector('.span').textContent = picture.querySelector('.picture__img').alt;
  bigPictureModalElement.querySelector('.social__caption').textContent = picture.querySelector('.picture__likes').textContent;

  clearCommentsList();
  renderCommentsList(index, commentsCount, 0);

  return () => {
    const targetCommentsCount = commentsCount;
    commentsCount += 5;
    renderCommentsList(index, commentsCount, targetCommentsCount);
  };
};

export {
  pictureModalOpenElements,
  commentsLoader,
  onCommentsLoaderClick,
  renderFullSizePicture
};
