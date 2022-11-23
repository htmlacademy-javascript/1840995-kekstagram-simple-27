const MAIN_URL = 'https://27.javascript.pages.academy/kekstagram-simple';
const ERROR_TEXT = 'Ошибка загрузки фотографий. Попробуйте перезагрузить страницу';
const ALERT_SHOW_TIME = 5000;
const body = document.querySelector('body');
const form = document.querySelector('#upload-select-image');
const previewPicture = form.querySelector('.img-upload__preview img');

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { isEscapeKey, showAlert, ERROR_TEXT, MAIN_URL, body, form, previewPicture };
