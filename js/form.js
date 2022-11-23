import { sendData } from './api.js';
import { isEscapeKey } from './util.js';
import { resetScale } from './scale.js';
import { resetEffect } from './effects.js';

const form = document.querySelector('#upload-select-image');
const modal = form.querySelector('.img-upload__overlay');
const defaultUpload = form.querySelector('#upload-file');
const body = document.querySelector('body');
const modalCloseElement = form.querySelector('#upload-cancel');
const messageSuccess = document.querySelector('#success').content.querySelector('.success');
const buttonSuccess = messageSuccess.querySelector('.success__button');
const messageError = document.querySelector('#error').content.querySelector('.error');
const buttonError = messageError.querySelector('.error__button');

const onOverlayClick = (evt) => {
  if (evt.target.className.includes('message')) {
    closeMessage();
  }
};

const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const onButtonClick = () => {
  closeMessage();
};

const openMessageSuccess = () => {
  body.appendChild(messageSuccess);
  document.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onMessageEscKeydown);
  buttonSuccess.addEventListener('click', onButtonClick);
};

const openMessageError = () => {
  body.appendChild(messageError);
  document.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onMessageEscKeydown);
  buttonError.addEventListener('click', onButtonClick);
};

function closeMessage() {
  const messageElement = body.querySelector('.message');
  body.removeChild(messageElement);
  document.removeEventListener('click', onOverlayClick);
  document.removeEventListener('keydown', onMessageEscKeydown);
}
const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt) && (evt.target.className.includes('message'))) {
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
  defaultUpload.value = '';
  form.reset();
  resetScale();
  resetEffect();
}

defaultUpload.addEventListener('change', () => {
  openModal();
});

const onSuccessSubmit = () => {
  closeModal();
  openMessageSuccess();
};

const onErrorSubmit = () => {
  openMessageError();
};

const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(onSuccessSubmit, onErrorSubmit, new FormData(evt.target));
  });
};

export { setUserFormSubmit, closeModal };
