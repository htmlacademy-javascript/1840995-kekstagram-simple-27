import { sendData } from './api.js';
import { isEscapeKey } from './util.js';

const form = document.querySelector('#upload-select-image');
const modal = form.querySelector('.img-upload__overlay');
const defaultUpload = form.querySelector('#upload-file');
const body = document.querySelector('body');
const modalCloseElement = form.querySelector('#upload-cancel');
const messageSuccess = document.querySelector('#success').content.querySelector('.success');
const messageSuccessOverlayClick = document.querySelector('#success').content.querySelector('.success__inner');
const buttonSuccess = messageSuccess.querySelector('.success__button');
const messageError = document.querySelector('#error').content.querySelector('.error');
const messageErrorOverlayClick = document.querySelector('#error').content.querySelector('.error__inner');
const buttonError = messageError.querySelector('.error__button');

const onSuccessEscClick = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    removeMessageSuccess();
  }
};
const onOverlaySuccessClick = (evt) => {
  const click = evt.composedPath().includes(messageSuccessOverlayClick);
  if (!click) {
    messageSuccessOverlayClick.style.display = 'none';
    removeMessageError();
    removeMessageSuccess();
  }
};

const onOverlayErrorClick = (evt) => {
  const click = evt.composedPath().includes(messageErrorOverlayClick);
  if (!click) {
    messageErrorOverlayClick.style.display = 'none';
    removeMessageError();
    removeMessageSuccess();
  }
};

const onErrorEscClick = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    removeMessageError();
  }
};

const openMessageSuccess = () => {
  body.appendChild(messageSuccess);
  document.addEventListener('click', onOverlaySuccessClick);
  document.addEventListener('keydown', onSuccessEscClick);
  buttonSuccess.addEventListener('click', removeMessageSuccess);
};

const openMessageError = () => {
  body.appendChild(messageError);
  document.addEventListener('click', onOverlayErrorClick);
  document.addEventListener('keydown', onErrorEscClick);
  buttonError.addEventListener('click', removeMessageError);
};


function removeMessageSuccess () {
  body.removeChild(messageSuccess);
  document.removeEventListener('click', onOverlaySuccessClick);
  document.removeEventListener('keydown', onSuccessEscClick);
}

function removeMessageError () {
  body.removeChild(messageError);
  document.removeEventListener('click', onOverlayErrorClick);
  document.removeEventListener('keydown', onErrorEscClick);
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
const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    // blockSubmitButton();
    sendData (
      () => {
        onSuccess();
      },
      () => {
        openMessageSuccess();
      },
      () => {
        openMessageError();
      },
      new FormData(evt.target),
    );
  });
};

export { setUserFormSubmit, closeModal, openMessageError };
