
const form = document.querySelector('#upload-select-image');
const previewPicture = form.querySelector('.img-upload__preview img');
const fieldScale = form.querySelector('.scale');
const buttonSmaller = fieldScale.querySelector('.scale__control--smaller');
const buttonBigger = fieldScale.querySelector('.scale__control--bigger');
const valueScale = fieldScale.querySelector('.scale__control--value');

const STEP = 25;
const MAX = 100;
const MIN = 25;

previewPicture.style.transform = 'scale(0.5)';
buttonSmaller.addEventListener('click', makeSmaller);

buttonBigger.addEventListener('click', makeBigger);

function makeSmaller() {
  const numberValue = parseInt(valueScale.value, 10);
  if (numberValue !== MIN) {
    const resultSmaller = numberValue - STEP;
    valueScale.value = resultSmaller + '%';
    previewPicture.style.transform = `scale(${resultSmaller / 100})`;
  }
}

function makeBigger() {
  const numberValue = parseInt(valueScale.value, 10);
  if (numberValue !== MAX) {
    const resultBigger = numberValue + STEP;
    valueScale.value = resultBigger + '%';
    previewPicture.style.transform = `scale(${resultBigger / 100})`;
  }
}
