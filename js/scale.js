
const form = document.querySelector('#upload-select-image');
const previewPicture = form.querySelector('.img-upload__preview img');
const fieldScale = form.querySelector('.scale');
const buttonSmaller = fieldScale.querySelector('.scale__control--smaller');
const buttonBigger = fieldScale.querySelector('.scale__control--bigger');
const valueScale = fieldScale.querySelector('.scale__control--value');

const Scale = {
  STEP: 25,
  MAX: 100,
  MIN: 25
};

const getScaleValue = () => parseInt(valueScale.value, 10);
let numberValue = getScaleValue();

const onDecButtonClick = () => {
  if (numberValue > Scale.MIN) {
    numberValue -= Scale.STEP;
    valueScale.value = `${numberValue}%`;
    previewPicture.style.transform = `scale(${numberValue / 100})`;
  }
};

const onIncButtonClick = () => {
  if (numberValue < Scale.MAX) {
    numberValue += Scale.STEP;
    valueScale.value = `${numberValue}%`;
    previewPicture.style.transform = `scale(${numberValue / 100})`;
  }
};

buttonSmaller.addEventListener('click', onDecButtonClick);

buttonBigger.addEventListener('click', onIncButtonClick);
