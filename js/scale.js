
const form = document.querySelector('#upload-select-image');
const previewPicture = form.querySelector('.img-upload__preview img');
const fieldScale = form.querySelector('.scale');
const buttonSmaller = fieldScale.querySelector('.scale__control--smaller');
const buttonBigger = fieldScale.querySelector('.scale__control--bigger');
const valueScale = fieldScale.querySelector('.scale__control--value');

const Scale = {
  STEP: 25,
  MAX: 100,
  MIN: 25,
  DEFAULT: 100,
};

const getScaleValue = () => parseInt(valueScale.value, 10);

const onDecButtonClick = () => {
  const newValue = getScaleValue() - Scale.STEP;
  if (newValue >= Scale.MIN) {
    valueScale.value = `${newValue}%`;
    previewPicture.style.transform = `scale(${newValue / 100})`;
  }
};

const onIncButtonClick = () => {
  const newValue = getScaleValue() + Scale.STEP;
  if (newValue <= Scale.MAX) {
    valueScale.value = `${newValue}%`;
    previewPicture.style.transform = `scale(${newValue / 100})`;
  }
};

const resetScale = () => {
  valueScale.value = `${Scale.DEFAULT}%`;
  previewPicture.style.transform = `scale(${Scale.DEFAULT / 100})`;
};

buttonSmaller.addEventListener('click', onDecButtonClick);

buttonBigger.addEventListener('click', onIncButtonClick);

export { resetScale };
