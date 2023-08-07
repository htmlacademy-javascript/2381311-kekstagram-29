import { isEscapeKey } from './util.js';
import { bigPictureModalElement, pictureModalOpenElements } from './fullSizePhotoComments.js';
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

pictureModalOpenElements.forEach((pictureModalOpenElement, index) => {
  pictureModalOpenElement.addEventListener('click', () => {
    renderFullSizePicture(pictureModalOpenElement, index);

    openPictureEvt();
  });
});

export { openPictureEvt, closePictureEvt };
