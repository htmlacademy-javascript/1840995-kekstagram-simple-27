import { sendData } from './api.js';
import { isEscapeKey } from './util.js';
import { resetScale } from './scale.js';
import { resetEffect } from './effects.js';
import { openMessageError, openMessageSuccess } from './messages.js';


const form = document.querySelector('#upload-select-image');
const modal = form.querySelector('.img-upload__overlay');
const fileUpload = form.querySelector('#upload-file');
const body = document.querySelector('body');
const modalCloseElement = form.querySelector('#upload-cancel');
const submitButton = form.querySelector('.img-upload__submit');

const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt) && !document.querySelector('.message')) {
    evt.preventDefault();
    closeModal();
  }
};

const onButtonCloseClick = () => {
  closeModal();
};

function openModal() {
  body.classList.add('modal-open');
  modal.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentEscKeydown);
  modalCloseElement.addEventListener('click', onButtonCloseClick);
}

function closeModal() {
  body.classList.remove('modal-open');
  modal.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentEscKeydown);
  modalCloseElement.removeEventListener('click', onButtonCloseClick);
  fileUpload.value = '';
  form.reset();
  resetScale();
  resetEffect();
}

fileUpload.addEventListener('change', () => {
  openModal();
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const onSuccessSubmit = () => {
  closeModal();
  openMessageSuccess();
  unblockSubmitButton();
};

const onErrorSubmit = () => {
  openMessageError();
  unblockSubmitButton();
};

const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockSubmitButton();
    sendData(onSuccessSubmit, onErrorSubmit, new FormData(evt.target));
  });
};

export { setUserFormSubmit };
