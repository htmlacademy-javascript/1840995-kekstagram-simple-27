import { isEscapeKey, body } from './util.js';

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
  const message = body.querySelector('.message');
  body.removeChild(message);
  document.removeEventListener('click', onOverlayClick);
  document.removeEventListener('keydown', onMessageEscKeydown);
}

export { openMessageSuccess, openMessageError };
