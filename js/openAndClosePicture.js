import { isEscapeKey } from './util.js';
import { pictureModalOpenElements, commentsLoader, onCommentsLoaderClick } from './fullSizePhotoComments.js';
import { renderFullSizePicture } from './gallery.js';

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

const openPictureEvt = (firstRender) => {
  pictureCloseButton.classList.remove('hidden');

  //bigPictureModalElement.querySelector('.social__comment-count').classList.add('hidden');
  //bigPictureModalElement.querySelector('.comments-loader').classList.add('hidden');

  document.querySelector('body').classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  pictureCloseButton.addEventListener('click', OnCloseButtonClick);

  commentsLoader.addEventListener('click', () => onCommentsLoaderClick(firstRender));
  commentsLoader.removeEventListener('click', () => onCommentsLoaderClick(firstRender));
};

const closePictureEvt = () => {
  pictureCloseButton.classList.add('hidden');

  document.querySelector('body').classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  pictureCloseButton.removeEventListener('click', OnCloseButtonClick);
};

const openFirstRender = () => {
  pictureModalOpenElements.forEach((pictureModalOpenElement, index) => {
    pictureModalOpenElement.addEventListener('click', () => {
      const firstRender = renderFullSizePicture(pictureModalOpenElement, index);

      openPictureEvt(firstRender);
    });
  });
};

export { openPictureEvt, closePictureEvt, openFirstRender };
