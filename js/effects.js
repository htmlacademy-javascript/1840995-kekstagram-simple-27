
const form = document.querySelector('#upload-select-image');
const previewPicture = form.querySelector('.img-upload__preview img');

const onFilterChange = (evt) => {
  const currentValue = evt.target.value;
  if (evt.target.matches('input[type="radio"]')) {
    const previewClasses = previewPicture.className.split(' ');
    const effectClass = previewClasses.find(() => previewClasses[0].includes('effects__preview--'));
    previewPicture.classList.remove(effectClass);
    previewPicture.classList.add(`effects__preview--${currentValue}`);
  }
};

form.addEventListener('change', onFilterChange);
