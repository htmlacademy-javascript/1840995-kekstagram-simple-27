import { isEscapeKey } from './util.js';

const form = document.querySelector('#upload-select-image');
const modal = form.querySelector('.img-upload__overlay');
const defaultUpload = form.querySelector('#upload-file');
const body = document.querySelector('body');
const modalCloseElement = form.querySelector('#upload-cancel');
const messageSuccess = document.querySelector('#success').content.querySelector('.success');
const messageSuccessForClick = messageSuccess.querySelector('.success__inner');
const buttonSuccess = messageSuccess.querySelector('.success__button');

const onSuccessEscClick = buttonSuccess.addEventListener('click', (evt) => {
  body.removeChild(messageSuccess);
  // или другой вариант
  // messageSuccess.classList.add('hidden');
  document.addEventListener('keydown', () => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      messageSuccess.classList.add('hidden');
    }
  });
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  closeModal();
  body.appendChild(messageSuccess);
  onMessageAnyClick(messageSuccessForClick, messageSuccess);
  onSuccessEscClick();
});

// функцию подготовил и для сообщения об ошибке тоже
function onMessageAnyClick(messageInner, message) {
  document.addEventListener('click', (evt) => {
    evt.preventDefault();
    const click = evt.composedPath().includes(messageInner);
    if (!click) {
      message.classList.add('hidden');
    }
  });
}

const onModuleEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    // evt.preventDefault();
    closeModal();
  }
};

function openModal() {
  body.classList.add('modal-open');
  modal.classList.remove('hidden');

  document.addEventListener('keydown', onModuleEscKeydown);
}

function closeModal() {
  body.classList.remove('modal-open');
  modal.classList.add('hidden');
  defaultUpload.innerHTML = '';

  document.removeEventListener('keydown', onModuleEscKeydown);
  // Если у кнопки прописан type reset, то не надо сбрасывать её настройки с помощью строки ниже?
  // evt.preventDefault();
}

defaultUpload.addEventListener('change', () => {
  openModal();
});

modalCloseElement.addEventListener('click', () => {
  closeModal();
});
