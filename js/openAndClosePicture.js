import { isEscapeKey } from './util.js';
import { pictureModalOpenElements, commentsLoader, onCommentsLoaderClick, renderFullSizePicture } from './fullSizePhoto.js';

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

const openPictureEvt = (renderComments) => {
  pictureCloseButton.classList.remove('hidden');

  //bigPictureModalElement.querySelector('.social__comment-count').classList.add('hidden');
  //bigPictureModalElement.querySelector('.comments-loader').classList.add('hidden');

  document.querySelector('body').classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  pictureCloseButton.addEventListener('click', OnCloseButtonClick);

  commentsLoader.addEventListener('click', () => onCommentsLoaderClick(renderComments));
  commentsLoader.removeEventListener('click', () => onCommentsLoaderClick(renderComments));
};

const closePictureEvt = () => {
  pictureCloseButton.classList.add('hidden');

  document.querySelector('body').classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  pictureCloseButton.removeEventListener('click', OnCloseButtonClick);

  // commentsLoader.removeEventListener('click', () => onCommentsLoaderClick(renderComments));
  // document.querySelector('.comments-loader').classList.remove('hidden');
};

const openFirstRender = () => {
  pictureModalOpenElements.forEach((pictureModalOpenElement, index) => {
    pictureModalOpenElement.addEventListener('click', () => {
      const renderComments = renderFullSizePicture(pictureModalOpenElement, index);

      openPictureEvt(renderComments);
    });
  });
};

export { openPictureEvt, closePictureEvt, openFirstRender };
