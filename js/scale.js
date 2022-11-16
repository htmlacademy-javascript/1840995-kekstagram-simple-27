
const form = document.querySelector('#upload-select-image');
const previewPicture = form.querySelector('.img-upload__preview img');
const fieldScale = form.querySelector('.scale');
const buttonSmaller = fieldScale.querySelector('.scale__control--smaller');
const buttonBigger = fieldScale.querySelector('.scale__control--bigger');
const valueScale = fieldScale.querySelector('.scale__control--value');

const Steps = {
  REGULAR: 25,
  MAX: 100,
  MIN: 25
};

const numberValue = () => parseInt(valueScale.value, 10);

const onImageDecrease = () => {
  if (numberValue() > Steps.MIN) {
    const newValue = numberValue() - Steps.REGULAR;
    valueScale.value = `${newValue}%`;
    previewPicture.style.transform = `scale(${newValue / 100})`;
  }
};

const onImageIncrease = () => {
  if (numberValue() < Steps.MAX) {
    const newValue = numberValue() + Steps.REGULAR;
    valueScale.value = `${newValue}%`;
    previewPicture.style.transform = `scale(${newValue / 100})`;
  }
};

buttonSmaller.addEventListener('click', onImageDecrease);

buttonBigger.addEventListener('click', onImageIncrease);
