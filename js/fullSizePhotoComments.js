import { getPhotos } from './gallery.js';
import { openPictureEvt, closePictureEvt } from './openAndClosePicture.js';
import { template, renderThumbnails } from './thumbnail.js';

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

const renderCommentsList = (photoIndex, commentsCount) => {
  const comments = getPhotos[photoIndex].comments;
  const fragment = document.createDocumentFragment();

  clearCommentsList();

  comments.forEach((comment, index) => {
    for (let i = 0; i < commentsCount; i++) {
      if (index === i) {
        const commentTemplate = template.cloneNode(true);
        commentTemplate.querySelector('img').src = comment.avatar;
        commentTemplate.querySelector('img').alt = comment.name;
        commentTemplate.querySelector('p').textContent = index + comment.message;
        fragment.appendChild(commentTemplate);
      }
    }
  });
  bigPictureModalElement.querySelector('.social__comment-count').firstChild.textContent = `${fragment.children.length} из `;
  commentsList.appendChild(fragment);
};

const commentsLoader = document.querySelector('.comments-loader');

const onCommentsLoaderClick = (firstRender) => {
  firstRender();
};

export {
  bigPictureModalElement,
  pictureModalOpenElements,
  renderCommentsList,
  commentsLoader,
  onCommentsLoaderClick
};
