import { ERROR_TEXT } from './util.js';
const MAIN_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess, onFail) => {
  fetch(`${MAIN_URL}/data`)
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => {
      onFail(ERROR_TEXT);
    });
};

const sendData = (onSuccess, onFail, data) => {
  fetch(
    MAIN_URL,
    {
      method: 'POST',
      data,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};


export { getData, sendData };
