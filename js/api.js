import { showAlert } from './util.js';

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => {
      showAlert('Ошибка загрузки фотографий. Попробуйте перезагрузить страницу');
    });
};

const sendData = (onSuccess, openMessageSuccess, openErrorMessage, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        openMessageSuccess();
      } else {
        openErrorMessage();
      }
    })
    .catch(() => {
      openErrorMessage();
    });
};


export { getData, sendData };
