
const form = document.querySelector('#upload-select-image');
const previewPicture = form.querySelector('.img-upload__preview img');

form.addEventListener('change', onFilterChange);

function onFilterChange(evt) {
  const currentValue = evt.target.value;

  if (evt.target.matches('input[type="radio"]')) {
    previewPicture.classList.add('effects__preview--' + currentValue);
    const resultArray = previewPicture.className.split('--');
    const includeElement = () => resultArray.includes('effects__preview');

    if (resultArray.find(includeElement)) {
      previewPicture.className = '';
      previewPicture.classList.add('effects__preview--' + currentValue);
    }
  }
}
