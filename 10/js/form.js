import { sendData } from './api.js';
import { isEscapeKey } from './util.js';

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
  const messageElement = body.querySelector('.message');
  const click = evt.composedPath().includes(messageElement);
  if (!click) {
    messageElement.style.display = 'none';
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
  messageElement.removeEventListener('click', onOverlayClick);
  messageElement.removeEventListener('keydown', onMessageEscKeydown);
  // удаление обработчика с кнопки
  // удаление элемента мессаджа
  // удаление обработчиков
}

//  onSuccessEscClick
//  buttonSuccess.addEventListener('click', (evt) => {
//   body.removeChild(messageSuccess);
//   // или другой вариант
//   // messageSuccess.classList.add('hidden');
//   document.addEventListener('keydown', () => {
//     if (isEscapeKey(evt)) {
//       evt.preventDefault();
//       messageSuccess.classList.add('hidden');
//     }
//   });
// });

// const blockSubmitButton = () => {
//   submitButton.disabled = true;
//   submitButton.textContent = 'Публикую...';
// };

// const unblockSubmitButton = () => {
//   submitButton.disabled = false;
//   submitButton.textContent = 'Опубликовать';
// };

// body.appendChild(messageSuccess);
// функцию подготовил и для сообщения об ошибке тоже
// function onMessageAnyClick(messageInner, message) {
//   document.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     const click = evt.composedPath().includes(messageInner);
//     if (!click) {
//       message.classList.add('hidden');
//     }
//   });
// }

const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
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

const setUserFormSubmit = (onSuccess, onError) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData (
      () => {
        onSuccess();
      },
      () => {
        onError();
      },
      new FormData(evt.target),
    );
  });
};

export { setUserFormSubmit, closeModal, openMessageError, onSuccessSubmit, onErrorSubmit };
