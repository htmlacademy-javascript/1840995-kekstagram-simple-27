import { form, previewPicture } from './util.js';

const onFilterChange = (evt) => {
  const currentValue = evt.target.value;
  if (evt.target.matches('input[type="radio"]')) {
    const previewClasses = previewPicture.className.split(' ');
    const effectClass = previewClasses.find((className) => className.includes('effects__preview--'));
    previewPicture.classList.remove(effectClass);
    previewPicture.classList.add(`effects__preview--${currentValue}`);
  }
};

const resetEffect = () => {
  previewPicture.className = '';
};

form.addEventListener('change', onFilterChange);

export { resetEffect };
