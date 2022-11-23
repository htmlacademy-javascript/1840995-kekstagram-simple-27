function getRandomInt(min, max) {
  if (min <= 0 || max <= 0 || max <= min) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function getRandomPositiveInteger(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const checkLengthString = (string, maxLength) => string.length <= maxLength;

checkLengthString(0, 100);

const isEscapeKey = (evt) => evt.key === 'Escape';

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const ALERT_SHOW_TIME = 5000;

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

const ERROR_TEXT = 'Ошибка загрузки фотографий. Попробуйте перезагрузить страницу';

export { getRandomInt, getRandomPositiveInteger, getRandomArrayElement, isEscapeKey, showAlert, ERROR_TEXT };
