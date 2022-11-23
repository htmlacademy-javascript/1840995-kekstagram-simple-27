import { ERROR_TEXT, MAIN_URL } from './util.js';

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
      body: data,
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
